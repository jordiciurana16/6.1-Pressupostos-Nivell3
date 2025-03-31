import { Component } from '@angular/core';
import { ICard } from './i-card';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardList: ICard[] = [];
}
