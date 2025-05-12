import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { BudgetsComponent } from '../budgets/budgets.component';
import { RouterModule, RouterLink } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-landing',
  imports: [
    BannerComponent,
    BudgetsComponent,
    RouterLink,
    RouterModule,
    FormComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  constructor(public budgetService: BudgetService) {}

  copyUrl() {
    navigator.clipboard.writeText(window.location.href);
  }
}
