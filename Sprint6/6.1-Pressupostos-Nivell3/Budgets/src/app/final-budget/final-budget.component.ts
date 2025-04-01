import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-final-budget',
  imports: [],
  templateUrl: './final-budget.component.html',
  styleUrl: './final-budget.component.scss',
})
export class FinalBudgetComponent {
  constructor(public BudgetService: BudgetService) {}
}
