import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAngleDoubleLeftComponent } from './fas-fa-angle-double-left.component';

describe('FasFaAngleDoubleLeftComponent', () => {
  let component: FasFaAngleDoubleLeftComponent;
  let fixture: ComponentFixture<FasFaAngleDoubleLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAngleDoubleLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAngleDoubleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
