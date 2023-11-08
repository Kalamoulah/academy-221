import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnneeComponent } from './card-annee.component';

describe('CardAnneeComponent', () => {
  let component: CardAnneeComponent;
  let fixture: ComponentFixture<CardAnneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAnneeComponent]
    });
    fixture = TestBed.createComponent(CardAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
