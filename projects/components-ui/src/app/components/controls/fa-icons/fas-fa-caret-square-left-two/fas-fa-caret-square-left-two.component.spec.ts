import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretSquareLeftTwoComponent } from './fas-fa-caret-square-left-two.component';

describe('FasFaCaretSquareLeftTwoComponent', () => {
  let component: FasFaCaretSquareLeftTwoComponent;
  let fixture: ComponentFixture<FasFaCaretSquareLeftTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretSquareLeftTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretSquareLeftTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
