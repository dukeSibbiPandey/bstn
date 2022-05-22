import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSecondaryFlatComponent } from './btn-outline-secondary-flat.component';

describe('BtnOutlineSecondaryFlatComponent', () => {
  let component: BtnOutlineSecondaryFlatComponent;
  let fixture: ComponentFixture<BtnOutlineSecondaryFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSecondaryFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSecondaryFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
