import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/State';
import { Shoe } from 'src/app/Shoe';
@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  @Input()
  currentShow: Shoe = State.currentShow;
  basePrice: number = State.currentShow.price;
  cartnow: Shoe[] = State.cart;

  @Output() cartUpdate: EventEmitter<Shoe[]> = new EventEmitter();

  constructor() {}

  renderImage(image: string) {
    const mainImage = <HTMLImageElement>(
      document.querySelector('#product--main-image')
    );
    mainImage.src = image;
  }

  updatePrice(indexOfSize: number) {
    this.currentShow.price = State.currentShow.basePrice + indexOfSize * 50;
  }

  addToCart(shoe: Shoe) {
    State.cart.push(shoe);
    this.cartUpdate.emit(State.cart);
  }

  ngOnInit(): void {}
}
