import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AdminCRUDComponent } from './admin-crud/admin-crud.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component'
import { LoggedInValidateGuard } from '../customer/logged-in-validate.guard';
import { LoggedInValidatorGuard } from './logged-in-validator.guard';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';


@NgModule({
  declarations: [
    ListComponent,
    AdminCRUDComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    AdminLandingPageComponent,
    AdminCustomersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin/login',
        component: LoginComponent,
      },
      {
        path: 'admin/details/:id',
        component: DetailsComponent,
        canActivate: [LoggedInValidatorGuard],
      },
      {
        path: 'admin/create',
        component: CreateComponent,
        canActivate: [LoggedInValidatorGuard],
      },
      {
        path: 'admin/edit/:id',
        component: EditComponent,
        canActivate: [LoggedInValidatorGuard],
      },

      {
        path: 'admin/customer',
        component: AdminCustomersComponent,
        canActivate: [LoggedInValidatorGuard],
      },


      {
        path: 'admin/:id',
        component: AdminLandingPageComponent,
        canActivate: [LoggedInValidatorGuard],
      },
      {
        path: 'admin/crud/:id',
        component: AdminCRUDComponent,
        canActivate: [LoggedInValidatorGuard],
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
