import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientstoryComponent } from './ingredientstory.component';

describe('IngredientstoryComponent', () => {
  let component: IngredientstoryComponent;
  let fixture: ComponentFixture<IngredientstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientstoryComponent]
    });
    fixture = TestBed.createComponent(IngredientstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
