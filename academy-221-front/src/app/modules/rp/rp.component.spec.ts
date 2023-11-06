import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpComponent } from './rp.component';

describe('RpComponent', () => {
  let component: RpComponent;
  let fixture: ComponentFixture<RpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RpComponent]
    });
    fixture = TestBed.createComponent(RpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
