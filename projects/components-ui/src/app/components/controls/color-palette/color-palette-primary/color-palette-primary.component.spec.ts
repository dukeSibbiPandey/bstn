import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPalettePrimaryComponent } from './color-palette-primary.component';

describe('ColorPalettePrimaryComponent', () => {
  let component: ColorPalettePrimaryComponent;
  let fixture: ComponentFixture<ColorPalettePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPalettePrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalettePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
