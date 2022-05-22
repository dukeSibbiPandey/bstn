import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteTealComponent } from './color-palette-teal.component';

describe('ColorPaletteTealComponent', () => {
  let component: ColorPaletteTealComponent;
  let fixture: ComponentFixture<ColorPaletteTealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteTealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteTealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
