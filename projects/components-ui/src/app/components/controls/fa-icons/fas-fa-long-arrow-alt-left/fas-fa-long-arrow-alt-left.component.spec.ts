import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaLongArrowAltLeftComponent } from './fas-fa-long-arrow-alt-left.component';

describe('FasFaLongArrowAltLeftComponent', () => {
  let component: FasFaLongArrowAltLeftComponent;
  let fixture: ComponentFixture<FasFaLongArrowAltLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaLongArrowAltLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaLongArrowAltLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
