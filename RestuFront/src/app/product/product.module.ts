import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductService } from './services/product.service';
import { ProductRoutingModule, PRODUCT_COMPONENTS } from './product-routing.module';
//import { ProductShowimageComponent } from './components/product-showimage/product-showimage.component';

@NgModule({
    declarations: [
        PRODUCT_COMPONENTS,
        ProductListComponent,
        ProductEditComponent
        //ProductShowimageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ProductRoutingModule
    ],
    providers: [
        ProductService
    ],
    entryComponents: [
    //ProductShowimageComponent
    ]
  })

  export class ProductModule {}
