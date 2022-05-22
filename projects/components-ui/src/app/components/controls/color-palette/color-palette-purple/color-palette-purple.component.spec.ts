import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPalettePurpleComponent } from './color-palette-purple.component';

describe('ColorPalettePurpleComponent', () => {
  let component: ColorPalettePurpleComponent;
  let fixture: ComponentFixture<ColorPalettePurpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPalettePurpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalettePurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
