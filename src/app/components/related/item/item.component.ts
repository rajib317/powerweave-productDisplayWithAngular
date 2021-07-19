import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { State } from 'src/app/State';
import { Shoe } from 'src/app/Shoe';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() relatedItem!: Shoe;
  @Output() cartUpdated: EventEmitter<boolean> = new EventEmitter();
  @Output() currentShowUpdated: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  addToCart(item: Shoe) {
    State.cart.push(item);
    this.cartUpdated.emit(true);
  }

  renderMe(item: Shoe) {
    State.currentShow = item;
    this.currentShowUpdated.emit(true);
    window.scrollTo({ top: 132 });
  }

  ngOnInit(): void {}
}
