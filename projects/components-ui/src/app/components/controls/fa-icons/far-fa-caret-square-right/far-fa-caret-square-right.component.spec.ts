import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaCaretSquareRightComponent } from './far-fa-caret-square-right.component';

describe('FarFaCaretSquareRightComponent', () => {
  let component: FarFaCaretSquareRightComponent;
  let fixture: ComponentFixture<FarFaCaretSquareRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaCaretSquareRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaCaretSquareRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
