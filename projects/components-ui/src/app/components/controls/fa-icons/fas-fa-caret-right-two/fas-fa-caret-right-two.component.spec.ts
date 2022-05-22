import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretRightTwoComponent } from './fas-fa-caret-right-two.component';

describe('FasFaCaretRightTwoComponent', () => {
  let component: FasFaCaretRightTwoComponent;
  let fixture: ComponentFixture<FasFaCaretRightTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretRightTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretRightTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
