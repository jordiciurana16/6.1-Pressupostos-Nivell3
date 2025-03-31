import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBudgetComponent } from './final-budget.component';

describe('FinalBudgetComponent', () => {
  let component: FinalBudgetComponent;
  let fixture: ComponentFixture<FinalBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
