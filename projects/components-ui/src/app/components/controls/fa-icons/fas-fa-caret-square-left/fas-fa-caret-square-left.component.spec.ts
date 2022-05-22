import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretSquareLeftComponent } from './fas-fa-caret-square-left.component';

describe('FasFaCaretSquareLeftComponent', () => {
  let component: FasFaCaretSquareLeftComponent;
  let fixture: ComponentFixture<FasFaCaretSquareLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretSquareLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretSquareLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
