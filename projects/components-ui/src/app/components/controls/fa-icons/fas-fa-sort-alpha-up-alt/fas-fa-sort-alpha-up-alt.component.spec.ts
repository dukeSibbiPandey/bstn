import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortAlphaUpAltComponent } from './fas-fa-sort-alpha-up-alt.component';

describe('FasFaSortAlphaUpAltComponent', () => {
  let component: FasFaSortAlphaUpAltComponent;
  let fixture: ComponentFixture<FasFaSortAlphaUpAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortAlphaUpAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortAlphaUpAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
