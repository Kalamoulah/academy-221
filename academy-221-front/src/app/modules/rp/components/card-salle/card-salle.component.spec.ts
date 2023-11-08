import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSalleComponent } from './card-salle.component';

describe('CardSalleComponent', () => {
  let component: CardSalleComponent;
  let fixture: ComponentFixture<CardSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSalleComponent]
    });
    fixture = TestBed.createComponent(CardSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
