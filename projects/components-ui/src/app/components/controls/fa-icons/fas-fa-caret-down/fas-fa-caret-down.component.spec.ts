import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretDownComponent } from './fas-fa-caret-down.component';

describe('FasFaCaretDownComponent', () => {
  let component: FasFaCaretDownComponent;
  let fixture: ComponentFixture<FasFaCaretDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
