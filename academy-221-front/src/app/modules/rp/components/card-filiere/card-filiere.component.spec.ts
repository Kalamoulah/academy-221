import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFiliereComponent } from './card-filiere.component';

describe('CardFiliereComponent', () => {
  let component: CardFiliereComponent;
  let fixture: ComponentFixture<CardFiliereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFiliereComponent]
    });
    fixture = TestBed.createComponent(CardFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
