import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteDangerComponent } from './color-palette-danger.component';

describe('ColorPaletteDangerComponent', () => {
  let component: ColorPaletteDangerComponent;
  let fixture: ComponentFixture<ColorPaletteDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteDangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
