import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})

export class FirstComponentComponent  {
  name: string = 'Apple';
  description: string = "Tasty and red";
  price: number = 5;
  category = Category.Products;
  isAvailable: boolean = true;
}
