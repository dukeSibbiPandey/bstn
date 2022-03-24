import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAngleDownComponent } from './fas-fa-angle-down.component';

describe('FasFaAngleDownComponent', () => {
  let component: FasFaAngleDownComponent;
  let fixture: ComponentFixture<FasFaAngleDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAngleDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAngleDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
