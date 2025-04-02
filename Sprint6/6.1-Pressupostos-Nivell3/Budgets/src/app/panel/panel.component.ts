import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  pages = new FormControl(1);
  languages = new FormControl(1);
  target: any;

  constructor() {}

  updateValue(control: FormControl, value: boolean) {
    const inputValue = control.value;
    this.webBudget(this.pages, this.languages);

    if (value) {
      control.setValue(inputValue + 1);
    } else if (!value && inputValue > 1) {
      control.setValue(inputValue - 1);
    }
  }

  webBudget(pages: FormControl, languages: FormControl): number {
    const pagesValue = pages.value;
    const languagesValue = languages.value;
    const totalWebBudget = pagesValue * languagesValue * 30;
    console.log('Total Web Budget:', totalWebBudget);
    return totalWebBudget;
  }
}
