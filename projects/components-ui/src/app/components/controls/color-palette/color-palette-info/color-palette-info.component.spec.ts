import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteInfoComponent } from './color-palette-info.component';

describe('ColorPaletteInfoComponent', () => {
  let component: ColorPaletteInfoComponent;
  let fixture: ComponentFixture<ColorPaletteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
