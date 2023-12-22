import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicywarrantyComponent } from './policywarranty.component';

describe('PolicywarrantyComponent', () => {
  let component: PolicywarrantyComponent;
  let fixture: ComponentFixture<PolicywarrantyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicywarrantyComponent]
    });
    fixture = TestBed.createComponent(PolicywarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
