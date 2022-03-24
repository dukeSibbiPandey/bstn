import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretSquareUpComponent } from './fas-fa-caret-square-up.component';

describe('FasFaCaretSquareUpComponent', () => {
  let component: FasFaCaretSquareUpComponent;
  let fixture: ComponentFixture<FasFaCaretSquareUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretSquareUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretSquareUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
