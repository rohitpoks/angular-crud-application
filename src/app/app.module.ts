import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailsComponent } from './admin/details/details.component';
import { CustomerModule } from './customer/customer.module';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{path: '', component: HomepageComponent},
    ]),
    AdminModule,
    CustomerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
