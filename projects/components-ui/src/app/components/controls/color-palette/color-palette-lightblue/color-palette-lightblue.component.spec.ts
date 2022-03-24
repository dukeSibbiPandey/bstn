import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteLightblueComponent } from './color-palette-lightblue.component';

describe('ColorPaletteLightblueComponent', () => {
  let component: ColorPaletteLightblueComponent;
  let fixture: ComponentFixture<ColorPaletteLightblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteLightblueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteLightblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
