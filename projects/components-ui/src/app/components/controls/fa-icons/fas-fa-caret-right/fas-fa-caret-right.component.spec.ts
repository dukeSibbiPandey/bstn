import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretRightComponent } from './fas-fa-caret-right.component';

describe('FasFaCaretRightComponent', () => {
  let component: FasFaCaretRightComponent;
  let fixture: ComponentFixture<FasFaCaretRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
