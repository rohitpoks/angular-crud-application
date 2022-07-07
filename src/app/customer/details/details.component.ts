import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessorService } from '../accessor.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  person: Customer = {
    name: '',
    gender: '',
    id: 0,
    age: 0,
    username: '',
    password: ''
  };
  id = 0;
  constructor(
    private accessor: AccessorService,
    private activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activated.paramMap.subscribe((data) => {
      this.id = Number(data.get('id'));
      this.accessor
        .getCustomer(this.id)
        .subscribe((data) => (this.person = data));
    });
  }

  
}
