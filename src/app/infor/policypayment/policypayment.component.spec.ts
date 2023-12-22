import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicypaymentComponent } from './policypayment.component';

describe('PolicypaymentComponent', () => {
  let component: PolicypaymentComponent;
  let fixture: ComponentFixture<PolicypaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicypaymentComponent]
    });
    fixture = TestBed.createComponent(PolicypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
