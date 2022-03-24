import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteFuchsiaComponent } from './color-palette-fuchsia.component';

describe('ColorPaletteFuchsiaComponent', () => {
  let component: ColorPaletteFuchsiaComponent;
  let fixture: ComponentFixture<ColorPaletteFuchsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteFuchsiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteFuchsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
