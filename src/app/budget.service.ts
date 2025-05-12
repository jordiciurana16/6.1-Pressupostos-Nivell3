import { Injectable } from '@angular/core';
import { ICard } from './card/i-card';
import { Router } from '@angular/router';

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
  currentUrl: string = '';

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

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
      if (!this.serviceNamesList.includes(card.title)) {
        this.addBudget(card.price);
        this.serviceNamesList.push(card.title);
      }
    } else {
      if (this.serviceNamesList.includes(card.title)) {
        this.removeBudget(card.price);
        const index = this.serviceNamesList.indexOf(card.title);
        if (index !== -1) {
          this.serviceNamesList.splice(index, 1);
        }
      }
    }
    console.log(this.serviceNamesList);
  }

  getWebBudget(pages: number, languages: number): number {
    if (pages === 1 && languages === 1) {
      this.totalWebBudget = 0;
    } else {
      this.totalWebBudget = pages * languages * 30;
    }
    return this.totalWebBudget;
  }

  getCurrentUrl(): string {
    return this.currentUrl;
  }
}
