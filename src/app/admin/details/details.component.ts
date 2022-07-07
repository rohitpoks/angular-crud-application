import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessorService } from '../accessor.service';
import { Admin } from '../admin';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  showID: number;
  person: Admin = {
    id: 0,
    name: '',
    role: '',
    username: '',
    password: '',
  };
  constructor(
    private activator: ActivatedRoute,
    private accessor: AccessorService,
    private router: Router
  ) {
    this.showID = 0;
  }

  // as a rule of thumb, return obervable from service, and subscribe in component
  ngOnInit(): void {
    this.activator.paramMap.subscribe(
      (data) => (this.showID = Number(data.get('id')))
    );

    this.accessor
      .getAdmin(this.showID)
      .subscribe((data) => (this.person = data));
  }

  goBack() {
    this.router.navigateByUrl('/admin/crud/' + this.accessor.currentID);
  }
}
