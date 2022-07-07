import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer/customer';
import { AccessorService } from '../accessor.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {
  customer: Customer[] = []
  constructor(private accessor: AccessorService, private router: Router) { }

  ngOnInit(): void {
    this.accessor.getCustomer().subscribe(
      (data) => this.customer = data
    )
  }

  goBack() {
    const url = '/admin/crud/' + this.accessor.currentID;
    this.router.navigateByUrl(url)
  }

}
