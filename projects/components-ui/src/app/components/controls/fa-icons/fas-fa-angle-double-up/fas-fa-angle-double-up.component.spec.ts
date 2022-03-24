import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAngleDoubleUpComponent } from './fas-fa-angle-double-up.component';

describe('FasFaAngleDoubleUpComponent', () => {
  let component: FasFaAngleDoubleUpComponent;
  let fixture: ComponentFixture<FasFaAngleDoubleUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAngleDoubleUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAngleDoubleUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
