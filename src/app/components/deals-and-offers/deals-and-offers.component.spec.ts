import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsAndOffersComponent } from './deals-and-offers.component';

describe('DealsAndOffersComponent', () => {
  let component: DealsAndOffersComponent;
  let fixture: ComponentFixture<DealsAndOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealsAndOffersComponent]
    });
    fixture = TestBed.createComponent(DealsAndOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
