import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Shoe } from 'src/app/Shoe';
import { Related } from 'src/app/Related';
import { State } from 'src/app/State';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
})
export class RelatedComponent implements OnInit {
  related: Shoe[];

  @Output() currentShowUpdated: EventEmitter<boolean> = new EventEmitter();

  shuffledShoes!: Shoe[];

  shuffleArray(arr: Shoe[]) {
    let m = arr.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }

    return arr;
  }

  constructor() {
    this.related = Related;
  }
  addToCart(item: Shoe) {}
  test() {
    console.log('State.CurrentShow=', State.currentShow);
    this.currentShowUpdated.emit(true);
  }

  updateCartView() {
    const cartNumberEl = <HTMLElement>document.querySelector('.cart-number')!;
    cartNumberEl.textContent = `${State.cart.length}`;
  }

  ngOnInit(): void {
    this.shuffledShoes = this.shuffleArray(Related); // add your array as input
  }
}
