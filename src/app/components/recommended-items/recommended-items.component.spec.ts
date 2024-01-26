import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedItemsComponent } from './recommended-items.component';

describe('RecommendedItemsComponent', () => {
  let component: RecommendedItemsComponent;
  let fixture: ComponentFixture<RecommendedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendedItemsComponent]
    });
    fixture = TestBed.createComponent(RecommendedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});