import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretSquareDownTwoComponent } from './fas-fa-caret-square-down-two.component';

describe('FasFaCaretSquareDownTwoComponent', () => {
  let component: FasFaCaretSquareDownTwoComponent;
  let fixture: ComponentFixture<FasFaCaretSquareDownTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretSquareDownTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretSquareDownTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
