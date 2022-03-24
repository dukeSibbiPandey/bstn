import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaCaretSquareLeftTwoComponent } from './far-fa-caret-square-left-two.component';

describe('FarFaCaretSquareLeftTwoComponent', () => {
  let component: FarFaCaretSquareLeftTwoComponent;
  let fixture: ComponentFixture<FarFaCaretSquareLeftTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaCaretSquareLeftTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaCaretSquareLeftTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
