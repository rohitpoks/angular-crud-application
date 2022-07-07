import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessorService } from '../accessor.service';

@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCRUDComponent implements OnInit {

  constructor(private router: Router, private accessor: AccessorService) { }

  ngOnInit(): void {
  }

  goBack() {  
    this.router.navigateByUrl('/admin/' + this.accessor.currentID);
  }

}
