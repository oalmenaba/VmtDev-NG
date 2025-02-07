import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableProductComponent } from './table-product/table-product.component';
import { SharedModule } from '../shared/shared.module';
import { TableProductSelectComponent} from './table-product-select/table-product-select.component';
import { ProductCartComponent } from './product-cart/product-cart.component';



@NgModule({
  declarations: [
    TableProductComponent,
    TableProductSelectComponent,
    ProductCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductCartComponent
  ]
})
export class ShopcartModule { }