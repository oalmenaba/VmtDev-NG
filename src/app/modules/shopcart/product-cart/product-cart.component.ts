import { Component, ViewChild } from '@angular/core';
import { ProductDetailI } from '../../../interfaces/productdetailI.interface';
import { TableProductSelectComponent } from '../table-product-select/table-product-select.component';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styles: ``
})
export class ProductCartComponent {
  @ViewChild (TableProductSelectComponent) productSelected!: TableProductSelectComponent;

  aggProduct(product: ProductDetailI) {
    this.productSelected.listProductSelected.push(product);
  }
}
