import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAngleLeftComponent } from './fas-fa-angle-left.component';

describe('FasFaAngleLeftComponent', () => {
  let component: FasFaAngleLeftComponent;
  let fixture: ComponentFixture<FasFaAngleLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAngleLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAngleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
