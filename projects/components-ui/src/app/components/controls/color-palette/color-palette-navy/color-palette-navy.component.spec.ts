import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteNavyComponent } from './color-palette-navy.component';

describe('ColorPaletteNavyComponent', () => {
  let component: ColorPaletteNavyComponent;
  let fixture: ComponentFixture<ColorPaletteNavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteNavyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteNavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
