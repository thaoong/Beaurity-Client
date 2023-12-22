import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicysecurityComponent } from './policysecurity.component';

describe('PolicysecurityComponent', () => {
  let component: PolicysecurityComponent;
  let fixture: ComponentFixture<PolicysecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicysecurityComponent]
    });
    fixture = TestBed.createComponent(PolicysecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
