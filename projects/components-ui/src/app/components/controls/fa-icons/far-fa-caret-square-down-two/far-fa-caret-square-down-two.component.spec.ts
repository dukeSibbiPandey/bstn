import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaCaretSquareDownTwoComponent } from './far-fa-caret-square-down-two.component';

describe('FarFaCaretSquareDownTwoComponent', () => {
  let component: FarFaCaretSquareDownTwoComponent;
  let fixture: ComponentFixture<FarFaCaretSquareDownTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaCaretSquareDownTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaCaretSquareDownTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
