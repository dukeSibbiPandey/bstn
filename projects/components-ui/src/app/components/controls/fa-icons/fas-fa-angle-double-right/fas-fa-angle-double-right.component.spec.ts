import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAngleDoubleRightComponent } from './fas-fa-angle-double-right.component';

describe('FasFaAngleDoubleRightComponent', () => {
  let component: FasFaAngleDoubleRightComponent;
  let fixture: ComponentFixture<FasFaAngleDoubleRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAngleDoubleRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAngleDoubleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
