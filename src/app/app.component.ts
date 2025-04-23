import { Component } from '@angular/core';
import {ProductComponent} from './product/product.component';
import Product from '../models/product';
import {CommonModule} from '@angular/common';
import {KoszykComponent} from './koszyk/koszyk.component';
import {NaglowekComponent} from './naglowek/naglowek.component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, CommonModule, KoszykComponent, NaglowekComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';

  wartoscKoszyka: number;

  wyswietlProdukty = true;

  constructor() {
    this.wartoscKoszyka = 0;
  }

  dodajDoKoszyka(product: Product) {
    this.wartoscKoszyka += product.cena;
  }

  zeruj()
  {
    this.wartoscKoszyka = 0;
    this.produkty.forEach(produkt => {produkt.liczbaSztuk = 0})
  }

  produkty: Product[] = [
    {
      nazwa: 'Produkt 1',
      cena: 20.00,
      dataUtworzenia: new Date(),
      czyPromocja: false,
      liczbaSztuk:0,
    },
    {
      nazwa: 'Produkt 2',
      cena: 30.00,
      dataUtworzenia: new Date(),
      czyPromocja: true,
      liczbaSztuk:0,
    },
    {
      nazwa: 'Produkt 3',
      cena: 40.00,
      dataUtworzenia: new Date(),
      czyPromocja: false,
      liczbaSztuk:0,
    },
    {
      nazwa: 'Produkt 4',
      cena: 550.00,
      dataUtworzenia: new Date(),
      czyPromocja: true,
      liczbaSztuk:0,
    },
    {
      nazwa: 'Produkt 5',
      cena: 260.00,
      dataUtworzenia: new Date(),
      czyPromocja: false,
      liczbaSztuk:0,
    }
  ]
}
