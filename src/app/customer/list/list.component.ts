import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { AccessorService } from '../accessor.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people: Customer[] = [];
  constructor(private accessor: AccessorService, private router: Router) { }

  ngOnInit(): void {
    this.accessor.getPeople().subscribe(
      (data) => this.people = data
    )
  }

  onDelete(id : number) {
    this.accessor.deleteList(id)
    // console.log("delete called!");
    // this.router.navigateByUrl('/customer');
  }

}
