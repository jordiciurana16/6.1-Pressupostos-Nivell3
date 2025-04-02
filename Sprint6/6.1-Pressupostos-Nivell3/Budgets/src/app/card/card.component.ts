import { Component } from '@angular/core';
import { ICard } from './i-card';
import cardJSON from './cards.json';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardList: ICard[] = [];

  checkboxArray = new FormArray<FormControl<boolean | null>>([]);

  constructor(private BudgetService: BudgetService) {
    this.cardList = cardJSON;
    this.initializeCheckboxes();
  }

  initializeCheckboxes() {
    this.cardList.forEach(() =>
      this.checkboxArray.push(new FormControl(false))
    );
  }

  onCheckboxChange(event: Event, index: number) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.BudgetService.handleBudgetChange(
      this.cardList[index].price,
      isChecked
    );
  }
}
