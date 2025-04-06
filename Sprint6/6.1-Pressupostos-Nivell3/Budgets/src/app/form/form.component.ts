import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  userObject:
    | {
        name: string;
        phone: number;
        mail: string;
        price: number;
        services: Array<string>;
      }
    | undefined;
  usersBudgetList: any = [];
  RequireBudgetForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public BudgetService: BudgetService
  ) {}
  ngOnInit() {
    this.RequireBudgetForm = this.formBuilder.group({
      name: new FormControl(''),
      phone: new FormControl(''),
      mail: new FormControl(''),
    });
  }

  onSubmit() {
    if (!this.userObject) {
      this.userObject = {
        name: '',
        phone: 0,
        mail: '',
        price: 0,
        services: [],
      };
    }
    this.userObject.name = this.RequireBudgetForm.get('name')?.value;
    this.userObject.phone = this.RequireBudgetForm.get('phone')?.value;
    this.userObject.mail = this.RequireBudgetForm.get('mail')?.value;
    this.userObject.price = this.BudgetService.getTotalBudget();
    this.userObject.services = this.BudgetService.serviceNamesList;

    this.usersBudgetList.push({ ...this.userObject });
  }
}
