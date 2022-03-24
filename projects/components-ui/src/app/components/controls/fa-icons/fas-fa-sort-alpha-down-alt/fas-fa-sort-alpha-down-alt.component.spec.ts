import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortAlphaDownAltComponent } from './fas-fa-sort-alpha-down-alt.component';

describe('FasFaSortAlphaDownAltComponent', () => {
  let component: FasFaSortAlphaDownAltComponent;
  let fixture: ComponentFixture<FasFaSortAlphaDownAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortAlphaDownAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortAlphaDownAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
