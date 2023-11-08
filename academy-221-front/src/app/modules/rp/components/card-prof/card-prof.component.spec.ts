import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfComponent } from './card-prof.component';

describe('CardProfComponent', () => {
  let component: CardProfComponent;
  let fixture: ComponentFixture<CardProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProfComponent]
    });
    fixture = TestBed.createComponent(CardProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
