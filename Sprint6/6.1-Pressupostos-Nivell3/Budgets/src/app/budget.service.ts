import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  isChecked: boolean = false;
  budgetList: Array<number> = [];
  removedIndex: number | undefined;

  constructor() {}

  getTotalBudget(): number {
    return this.budgetList.reduce((acc, curr) => acc + curr, 0);
  }

  addBudget(amount: number): void {
    this.budgetList.push(amount);
  }

  removeBudget(amount: number): void {
    const index = this.budgetList.indexOf(amount);
    if (index !== -1) {
      this.budgetList.splice(index, 1);
    }
  }

  handleBudgetChange(amount: number, isChecked: boolean): void {
    if (isChecked) {
      this.addBudget(amount);
    } else {
      this.removeBudget(amount);
      isChecked = false;
    }
  }
}
