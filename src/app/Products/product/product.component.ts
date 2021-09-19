import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponentComponent {

  constructor() { }

  onAddToCart(): void {
      console.log("product was bought");
  }

}
