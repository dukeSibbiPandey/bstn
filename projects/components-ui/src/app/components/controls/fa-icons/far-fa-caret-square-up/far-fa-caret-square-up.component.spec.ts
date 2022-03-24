import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaCaretSquareUpComponent } from './far-fa-caret-square-up.component';

describe('FarFaCaretSquareUpComponent', () => {
  let component: FarFaCaretSquareUpComponent;
  let fixture: ComponentFixture<FarFaCaretSquareUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaCaretSquareUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaCaretSquareUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
