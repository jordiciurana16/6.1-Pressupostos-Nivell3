import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  userObject = {};
  usersBudgetList: any = [];
  RequireBudgetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.RequireBudgetForm = this.formBuilder.group({
      name: new FormControl(''),
      phone: new FormControl(''),
      mail: new FormControl(''),
    });
  }

  onSubmit() {
    this.userObject = this.RequireBudgetForm.value;
    this.usersBudgetList.push(this.userObject);
    console.log(this.usersBudgetList);
  }
}
