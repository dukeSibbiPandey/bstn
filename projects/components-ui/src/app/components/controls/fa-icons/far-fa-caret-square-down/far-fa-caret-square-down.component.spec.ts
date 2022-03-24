import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaCaretSquareDownComponent } from './far-fa-caret-square-down.component';

describe('FarFaCaretSquareDownComponent', () => {
  let component: FarFaCaretSquareDownComponent;
  let fixture: ComponentFixture<FarFaCaretSquareDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaCaretSquareDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaCaretSquareDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
