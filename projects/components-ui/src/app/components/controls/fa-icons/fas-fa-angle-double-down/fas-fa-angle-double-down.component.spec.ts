import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAngleDoubleDownComponent } from './fas-fa-angle-double-down.component';

describe('FasFaAngleDoubleDownComponent', () => {
  let component: FasFaAngleDoubleDownComponent;
  let fixture: ComponentFixture<FasFaAngleDoubleDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAngleDoubleDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAngleDoubleDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
