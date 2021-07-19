import { Component, Output, EventEmitter } from '@angular/core';
import { Shoe } from './Shoe';
import { State } from './State';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cart: Shoe[];
  curDisplay: Shoe = State.currentShow;
  constructor() {
    this.cart = [];
  }

  updateCartView(cart: Shoe[]) {
    const cartNumberEl = <HTMLElement>document.querySelector('.cart-number')!;
    cartNumberEl.textContent = `${cart.length}`;
  }
  sendToShowcase() {
    this.curDisplay = State.currentShow;
  }
}
