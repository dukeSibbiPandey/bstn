import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteSuccessComponent } from './color-palette-success.component';

describe('ColorPaletteSuccessComponent', () => {
  let component: ColorPaletteSuccessComponent;
  let fixture: ComponentFixture<ColorPaletteSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
