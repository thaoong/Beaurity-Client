import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinginstructionComponent } from './shoppinginstruction.component';

describe('ShoppinginstructionComponent', () => {
  let component: ShoppinginstructionComponent;
  let fixture: ComponentFixture<ShoppinginstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppinginstructionComponent]
    });
    fixture = TestBed.createComponent(ShoppinginstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
