import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortAlphaDownComponent } from './fas-fa-sort-alpha-down.component';

describe('FasFaSortAlphaDownComponent', () => {
  let component: FasFaSortAlphaDownComponent;
  let fixture: ComponentFixture<FasFaSortAlphaDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortAlphaDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortAlphaDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
