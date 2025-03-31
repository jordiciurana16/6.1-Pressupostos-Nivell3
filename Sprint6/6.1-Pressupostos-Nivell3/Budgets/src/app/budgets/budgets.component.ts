import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FinalBudgetComponent } from '../final-budget/final-budget.component';

@Component({
  selector: 'app-budgets',
  imports: [CardComponent, FinalBudgetComponent],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.scss',
})
export class BudgetsComponent {}
