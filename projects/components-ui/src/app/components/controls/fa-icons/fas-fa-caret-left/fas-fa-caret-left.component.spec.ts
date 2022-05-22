import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCaretLeftComponent } from './fas-fa-caret-left.component';

describe('FasFaCaretLeftComponent', () => {
  let component: FasFaCaretLeftComponent;
  let fixture: ComponentFixture<FasFaCaretLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCaretLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCaretLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
