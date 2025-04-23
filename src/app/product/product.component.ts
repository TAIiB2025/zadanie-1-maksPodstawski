import {Component, EventEmitter, Input, Output} from '@angular/core';
import Product from '../../models/product';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() product!: Product;
@Output() productDodaj = new EventEmitter<Product>();

czyZwin:boolean = true;

public dodajDoKoszyka(){
  this.product.liczbaSztuk++;
  this.productDodaj.emit(this.product);
}
}
