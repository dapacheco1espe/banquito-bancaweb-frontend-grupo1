import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOperationsComponent } from './loan-operations.component';

describe('LoanOperationsComponent', () => {
  let component: LoanOperationsComponent;
  let fixture: ComponentFixture<LoanOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
