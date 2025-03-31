import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { BudgetsComponent } from '../budgets/budgets.component';

@Component({
  selector: 'app-landing',
  imports: [BannerComponent, BudgetsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
