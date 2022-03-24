import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaCaretSquareLeftComponent } from './far-fa-caret-square-left.component';

describe('FarFaCaretSquareLeftComponent', () => {
  let component: FarFaCaretSquareLeftComponent;
  let fixture: ComponentFixture<FarFaCaretSquareLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaCaretSquareLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaCaretSquareLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
