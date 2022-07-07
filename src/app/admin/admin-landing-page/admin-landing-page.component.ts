import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessorService } from '../accessor.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css'],
})
export class AdminLandingPageComponent implements OnInit {
  constructor(
    private activated: ActivatedRoute,
    private accessor: AccessorService,
    private router: Router
  ) {}
  current: Admin = {
    name: '',
    id: 0,
    username: '',
    password: '',
    role: ''
  };
  ngOnInit(): void {
    this.activated.paramMap.subscribe((data) => {
      let temp = data.get('id');
      this.accessor
        .getAdmin(Number(temp))
        .subscribe((data) => (this.current = data));
    });
  }

  logOut() {
    this.accessor.loggedIn = false;
    this.router.navigateByUrl('/');
  }

  navigateToCRUD() {
    this.router.navigateByUrl('/admin/crud/' + this.accessor.currentID);
  }
}
