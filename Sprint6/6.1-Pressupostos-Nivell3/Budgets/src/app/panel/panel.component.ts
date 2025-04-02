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

    value ? control.setValue(inputValue + 1) : control.setValue(inputValue - 1);
  }
}
