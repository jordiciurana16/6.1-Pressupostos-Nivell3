import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budgetList: Array<number> = [];
  removedIndex: number | undefined;

  constructor() {}

  getTotalBudget(): number {
    return this.budgetList.reduce((acc, curr) => acc + curr, 0);
  }
}
