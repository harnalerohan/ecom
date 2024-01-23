import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicGadgetsComponent } from './electronic-gadgets.component';

describe('ElectronicGadgetsComponent', () => {
  let component: ElectronicGadgetsComponent;
  let fixture: ComponentFixture<ElectronicGadgetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicGadgetsComponent]
    });
    fixture = TestBed.createComponent(ElectronicGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
