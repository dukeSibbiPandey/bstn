import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaBrailleComponent } from './fas-fa-braille.component';

describe('FasFaBrailleComponent', () => {
  let component: FasFaBrailleComponent;
  let fixture: ComponentFixture<FasFaBrailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaBrailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaBrailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
