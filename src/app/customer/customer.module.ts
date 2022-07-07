import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCrudComponent } from './customer-crud/customer-crud.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { AdminCRUDComponent } from '../admin/admin-crud/admin-crud.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InvalidMessageComponent } from './invalid-message/invalid-message.component';
import { CustomerLandingPageComponent } from './customer-landing-page/customer-landing-page.component';
import { LoggedInValidateGuard } from './logged-in-validate.guard';
import { LoggedOutValidationGuard } from './logged-out-validation.guard';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [
    CustomerCrudComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    LoginComponent,
    InvalidMessageComponent,
    CustomerLandingPageComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'customer/details/:id',
        component: DetailsComponent,
        canActivate: [LoggedInValidateGuard],
      },
      { path: 'customer/create', component: CreateComponent },
      {
        path: 'customer/edit/:id',
        component: EditComponent,
        canActivate: [LoggedInValidateGuard],
      },
      { path: 'customer/login', component: LoginComponent , canActivate: [LoggedOutValidationGuard],},
      { path: 'customer/invalid', component: InvalidMessageComponent },
      {
        path: 'customer/products',
        component: ProductComponent,
        canActivate: [LoggedInValidateGuard],
      },
      {
        path: 'customer/:id',
        component: CustomerLandingPageComponent,
        canActivate: [LoggedInValidateGuard],
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
  ],
})

export class CustomerModule {}
