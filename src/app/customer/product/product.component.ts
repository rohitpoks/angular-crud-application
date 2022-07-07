import { Component, OnInit } from '@angular/core';
import { ProductAccessorService } from '../product-accessor.service';

import { Product } from '../customer';
import { Router } from '@angular/router';
import { AccessorService } from '../accessor.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productAccessor: ProductAccessorService, private router: Router, private accessor: AccessorService) {}

  ngOnInit(): void {
    this.productAccessor.getProducts().subscribe(
      (data) => this.products = data
    )
  }

  goBack() {
    this.router.navigateByUrl("/customer/" + this.accessor.currentID);
  }
}
