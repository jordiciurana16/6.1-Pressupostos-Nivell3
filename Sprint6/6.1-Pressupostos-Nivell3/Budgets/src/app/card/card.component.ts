import { Component } from '@angular/core';
import { ICard } from './i-card';
import cardJSON from './cards.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardList: ICard[] = [];
  constructor() {
    this.cardList = cardJSON;
  }
}
