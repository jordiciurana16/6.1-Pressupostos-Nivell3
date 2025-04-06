import { Injectable } from '@angular/core';
import { ICard } from './card/i-card';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  isChecked: boolean = false;
  budgetList: Array<number> = [];
  removedIndex: number | undefined;
  totalWebBudget: number = 0;
  cardList: ICard[] = [];
  serviceNamesList: string[] = [];

  constructor() {}

  getTotalBudget(): number {
    return (
      this.budgetList.reduce((acc, curr) => acc + curr, 0) + this.totalWebBudget
    );
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

  handleBudgetChange(card: ICard, isChecked: boolean): void {
    if (isChecked) {
      this.addBudget(card.price);
      this.serviceNamesList.push(card.title);
      console.log(this.serviceNamesList);
    } else {
      this.removeBudget(card.price);
      this.serviceNamesList.pop();
      console.log(this.serviceNamesList);

      isChecked = false;
    }
  }

  getWebBudget(pages: number, languages: number): number {
    if (pages === 1 && languages === 1) {
      this.totalWebBudget = 0;
    } else {
      this.totalWebBudget = pages * languages * 30;
    }
    return this.totalWebBudget;
  }
}
