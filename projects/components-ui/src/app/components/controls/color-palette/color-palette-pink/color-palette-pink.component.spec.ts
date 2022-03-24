import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPalettePinkComponent } from './color-palette-pink.component';

describe('ColorPalettePinkComponent', () => {
  let component: ColorPalettePinkComponent;
  let fixture: ComponentFixture<ColorPalettePinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPalettePinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalettePinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
