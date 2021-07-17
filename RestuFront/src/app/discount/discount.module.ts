import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DiscountListComponent } from './pages/discount-list/discount-list.component';
import { DISCOUNT_COMPONENTS, DiscountRoutingModule } from './discount-routing.module';
import { DiscountService } from './services/discount.service';
import { DiscountEditComponent } from './dialogs/discount-edit/discount-edit.component';

@NgModule({
    declarations: [
        DISCOUNT_COMPONENTS,
        DiscountListComponent,
        DiscountEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        DiscountRoutingModule
    ],
    providers: [
        DiscountService
    ],
    entryComponents: []
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class DiscountModule {}
