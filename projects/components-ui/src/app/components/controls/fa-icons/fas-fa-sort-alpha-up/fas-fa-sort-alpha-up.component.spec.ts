import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortAlphaUpComponent } from './fas-fa-sort-alpha-up.component';

describe('FasFaSortAlphaUpComponent', () => {
  let component: FasFaSortAlphaUpComponent;
  let fixture: ComponentFixture<FasFaSortAlphaUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortAlphaUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortAlphaUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
