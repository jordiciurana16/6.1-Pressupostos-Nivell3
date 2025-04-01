import { Component } from '@angular/core';
import { ICard } from './i-card';
import cardJSON from './cards.json';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardList: ICard[] = [];

  budgetList: Array<number> = [];
  removedIndex: number | undefined;

  checkboxArray = new FormArray<FormControl<boolean | null>>([]);

  constructor() {
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
    console.log(
      `Checkbox at position ${index} is ${
        isChecked ? 'checked' : 'unchecked'
      } and the budget is ${this.cardList[index].price}`
    );

    if (isChecked) {
      this.addBudget(index);
    } else if (!isChecked) {
      this.removeBudget(index);
    }
    console.log(this.budgetList);
    console.log(this.getTotalBudget());
  }

  addBudget(index: number): void {
    this.budgetList.push(this.cardList[index].price);
  }

  removeBudget(index: number): void {
    this.removedIndex = this.budgetList.indexOf(this.cardList[index].price);
    if (this.removedIndex !== -1) {
      this.budgetList.splice(this.removedIndex, 1);
    }
  }

  getTotalBudget(): number {
    return this.budgetList.reduce((acc, curr) => acc + curr, 0);
  }
}
