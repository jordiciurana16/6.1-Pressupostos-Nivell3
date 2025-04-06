import { Component } from '@angular/core';
import cardJSON from './cards.json';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-card',
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  checkboxArray = new FormArray<FormControl<boolean | null>>([]);

  webCardIsChecked = false;

  constructor(public BudgetService: BudgetService) {
    this.BudgetService.cardList = cardJSON;
    this.initializeCheckboxes();
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
  }

  freelanceServiceChecked() {}
}
