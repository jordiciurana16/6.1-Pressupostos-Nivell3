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
    console.log(this.BudgetService.budgetList);
    console.log(this.BudgetService.getTotalBudget());
  }

  addBudget(index: number): void {
    this.BudgetService.budgetList.push(this.cardList[index].price);
  }

  removeBudget(index: number): void {
    this.BudgetService.removedIndex = this.BudgetService.budgetList.indexOf(
      this.cardList[index].price
    );
    if (this.BudgetService.removedIndex !== -1) {
      this.BudgetService.budgetList.splice(this.BudgetService.removedIndex, 1);
    }
  }
}
