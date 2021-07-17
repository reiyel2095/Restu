import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavUserModule } from './nav-user/nav-user.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';
import { ChefModule } from './chef/chef.module';
import { CategoryModule } from './category/category.module';
import { DiscountModule } from './discount/discount.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NavUserModule,
    DeliveryboyModule,
    ChefModule,
    CategoryModule,
    DiscountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
