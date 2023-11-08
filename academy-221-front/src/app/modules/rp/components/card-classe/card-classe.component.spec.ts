import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClasseComponent } from './card-classe.component';

describe('CardClasseComponent', () => {
  let component: CardClasseComponent;
  let fixture: ComponentFixture<CardClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardClasseComponent]
    });
    fixture = TestBed.createComponent(CardClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
