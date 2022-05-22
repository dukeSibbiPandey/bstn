import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaLongArrowAltUpComponent } from './fas-fa-long-arrow-alt-up.component';

describe('FasFaLongArrowAltUpComponent', () => {
  let component: FasFaLongArrowAltUpComponent;
  let fixture: ComponentFixture<FasFaLongArrowAltUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaLongArrowAltUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaLongArrowAltUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
