import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaArrowAltCircleLeftComponent } from './far-fa-arrow-alt-circle-left.component';

describe('FarFaArrowAltCircleLeftComponent', () => {
  let component: FarFaArrowAltCircleLeftComponent;
  let fixture: ComponentFixture<FarFaArrowAltCircleLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaArrowAltCircleLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaArrowAltCircleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
