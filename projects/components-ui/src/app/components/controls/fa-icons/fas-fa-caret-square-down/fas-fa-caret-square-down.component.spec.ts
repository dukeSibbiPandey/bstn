import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretSquareDownComponent } from './fas-fa-caret-square-down.component';

describe('FasFaCaretSquareDownComponent', () => {
  let component: FasFaCaretSquareDownComponent;
  let fixture: ComponentFixture<FasFaCaretSquareDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretSquareDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretSquareDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
