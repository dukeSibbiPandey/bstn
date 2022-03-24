import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretUpComponent } from './fas-fa-caret-up.component';

describe('FasFaCaretUpComponent', () => {
  let component: FasFaCaretUpComponent;
  let fixture: ComponentFixture<FasFaCaretUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
