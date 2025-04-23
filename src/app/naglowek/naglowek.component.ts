import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-naglowek',
  imports: [],
  templateUrl: './naglowek.component.html',
  styleUrl: './naglowek.component.css'
})
export class NaglowekComponent {
@Input() tresc:string = "Sklep TAIiB";

public onMouseEnter() {
  this.tresc = "Sklep TAIiB:)"
}

public onMouseLeave() {
  this.tresc = "Sklep TAIiB"
}
}
