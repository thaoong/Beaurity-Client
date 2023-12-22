import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauritystoryComponent } from './beauritystory.component';

describe('BeauritystoryComponent', () => {
  let component: BeauritystoryComponent;
  let fixture: ComponentFixture<BeauritystoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeauritystoryComponent]
    });
    fixture = TestBed.createComponent(BeauritystoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
