import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOutdoorComponent } from './home-outdoor.component';

describe('HomeOutdoorComponent', () => {
  let component: HomeOutdoorComponent;
  let fixture: ComponentFixture<HomeOutdoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOutdoorComponent]
    });
    fixture = TestBed.createComponent(HomeOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
