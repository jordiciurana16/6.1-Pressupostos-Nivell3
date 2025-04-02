import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { BudgetsComponent } from '../budgets/budgets.component';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [BannerComponent, BudgetsComponent, RouterLink, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
