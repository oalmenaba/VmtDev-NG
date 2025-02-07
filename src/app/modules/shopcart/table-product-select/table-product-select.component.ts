import { Component } from '@angular/core';
import { ProductDetailI } from '../../../interfaces/productdetailI.interface';

@Component({
  selector: 'app-table-product-select',
  templateUrl: './table-product-select.component.html',
  styles: ``
})
export class TableProductSelectComponent {
  listProductSelected: ProductDetailI[] = [];
}
