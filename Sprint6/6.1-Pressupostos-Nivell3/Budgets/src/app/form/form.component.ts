import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
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
  filteredUsersBudgetList: any = [];
  RequireBudgetForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public BudgetService: BudgetService
  ) {}
  ngOnInit() {
    this.RequireBudgetForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{9}$'),
      ]),
      mail: new FormControl('', [Validators.required, Validators.email]),
    });
    this.filteredUsersBudgetList = this.usersBudgetList;
  }

  onSubmit() {
    if (this.RequireBudgetForm.invalid) {
      alert('Formulari invàlid. Si us plau, revisa els camps.');
      return;
    }
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

    this.usersBudgetList.push({ ...this.userObject, date: new Date() });
    this.filteredUsersBudgetList = [...this.usersBudgetList];
  }

  sortByDate() {
    this.filteredUsersBudgetList.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  sortByPrice() {
    this.filteredUsersBudgetList.sort((a: any, b: any) => b.price - a.price);
  }

  sortAlphabetically() {
    this.filteredUsersBudgetList.sort((a: any, b: any) =>
      a.name.localeCompare(b.name)
    );
  }

  filterByName(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    if (!searchValue) {
      this.filteredUsersBudgetList = [...this.usersBudgetList];
      return;
    }
    this.filteredUsersBudgetList = this.usersBudgetList.filter((user: any) =>
      user.name.toLowerCase().includes(searchValue)
    );
  }
}
