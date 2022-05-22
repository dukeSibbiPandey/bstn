import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaLongArrowAltRightComponent } from './fas-fa-long-arrow-alt-right.component';

describe('FasFaLongArrowAltRightComponent', () => {
  let component: FasFaLongArrowAltRightComponent;
  let fixture: ComponentFixture<FasFaLongArrowAltRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaLongArrowAltRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaLongArrowAltRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
