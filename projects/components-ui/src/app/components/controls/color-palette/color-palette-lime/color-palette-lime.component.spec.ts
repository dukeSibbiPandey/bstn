import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteLimeComponent } from './color-palette-lime.component';

describe('ColorPaletteLimeComponent', () => {
  let component: ColorPaletteLimeComponent;
  let fixture: ComponentFixture<ColorPaletteLimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteLimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteLimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
