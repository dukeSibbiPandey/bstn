import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaLongArrowAltDownComponent } from './fas-fa-long-arrow-alt-down.component';

describe('FasFaLongArrowAltDownComponent', () => {
  let component: FasFaLongArrowAltDownComponent;
  let fixture: ComponentFixture<FasFaLongArrowAltDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaLongArrowAltDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaLongArrowAltDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
