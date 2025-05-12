import { Component, OnInit } from '@angular/core';
import cardJSON from './cards.json';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { PanelComponent } from '../panel/panel.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  checkboxArray = new FormArray<FormControl<boolean | null>>([]);

  webCardIsChecked = false;

  constructor(
    public BudgetService: BudgetService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.BudgetService.cardList = cardJSON;
    this.initializeCheckboxes();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.BudgetService.cardList.forEach((_, index) => {
        const isChecked = params[`card${index}`] === 'true';
        this.checkboxArray.at(index).setValue(isChecked);
        if (isChecked) {
          this.BudgetService.handleBudgetChange(
            this.BudgetService.cardList[index],
            true
          );
        }
      });
    });
  }

  initializeCheckboxes() {
    this.BudgetService.cardList.forEach(() =>
      this.checkboxArray.push(new FormControl(false))
    );
  }

  onCheckboxChange(event: Event, index: number) {
    this.BudgetService.isChecked = (event.target as HTMLInputElement).checked;

    const card = this.BudgetService.cardList[index];
    this.BudgetService.handleBudgetChange(card, this.BudgetService.isChecked);

    if (
      this.BudgetService.isChecked &&
      index === this.BudgetService.cardList.length - 1
    ) {
      this.webCardIsChecked = true;
    }

    this.updateUrl();
  }

  private updateUrl() {
    const queryParams: any = {};
    this.checkboxArray.controls.forEach((control, index) => {
      queryParams[`card${index}`] = control.value;
    });
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
