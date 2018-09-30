import {Component} from '@angular/core';
import {ShowcaseItem} from './../shopping-cart/interfaces/showcase-item';
import {CartItem} from './../shopping-cart/classes/cart-item';

@Component({
  selector: 'app-showcase-item-component',
  templateUrl: './app-showcase-item.component.html',
  styleUrls: ['./app-showcase-item.component.scss']
})
export class AppShowcaseItemComponent implements ShowcaseItem {
  item: CartItem;
  format: string;
}
