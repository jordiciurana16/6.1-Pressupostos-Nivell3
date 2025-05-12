import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  pages = new FormControl(1);
  languages = new FormControl(1);
  showModal = false;
  activeModal: 'pages' | 'languages' | null = null;

  constructor(public BudgetService: BudgetService) {}

  updateValue(control: FormControl, value: boolean) {
    const inputValue = control.value;
    if (value) {
      control.setValue(inputValue + 1);
    } else if (!value && inputValue > 1) {
      control.setValue(inputValue - 1);
    }
    this.webBudget(this.pages, this.languages);
  }

  webBudget(pages: FormControl, languages: FormControl): any {
    const pagesValue = pages.value;
    const languagesValue = languages.value;
    const finalBudget = this.BudgetService.getWebBudget(
      pagesValue,
      languagesValue
    );
  }

  openModal(type: 'pages' | 'languages') {
    this.activeModal = type;
  }

  closeModal() {
    this.activeModal = null;
  }
}
