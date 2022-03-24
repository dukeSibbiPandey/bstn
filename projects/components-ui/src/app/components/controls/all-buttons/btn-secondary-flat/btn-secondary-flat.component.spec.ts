import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSecondaryFlatComponent } from './btn-secondary-flat.component';

describe('BtnSecondaryFlatComponent', () => {
  let component: BtnSecondaryFlatComponent;
  let fixture: ComponentFixture<BtnSecondaryFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSecondaryFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSecondaryFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
