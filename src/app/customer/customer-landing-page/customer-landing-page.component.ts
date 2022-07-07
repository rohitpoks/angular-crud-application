import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessorService } from '../accessor.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-landing-page',
  templateUrl: './customer-landing-page.component.html',
  styleUrls: ['./customer-landing-page.component.css']
})
export class CustomerLandingPageComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private accessor: AccessorService, private router: Router) { }
  current: Customer = {
    name: '',
    id: 0,
    gender: '',
    age: 0,
    username: '',
    password: ''
  }
  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      (data) => {
        let temp = data.get('id');
        this.accessor.getCustomer(Number(temp)).subscribe(
          (data) => this.current = data
        )
      }
    )
  }

  logOut() {
    this.accessor.loggedIn = false;
    this.router.navigateByUrl('/');
  }

}
