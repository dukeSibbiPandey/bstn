import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretSquareRightComponent } from './fas-fa-caret-square-right.component';

describe('FasFaCaretSquareRightComponent', () => {
  let component: FasFaCaretSquareRightComponent;
  let fixture: ComponentFixture<FasFaCaretSquareRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretSquareRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretSquareRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
