import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAngleUpComponent } from './fas-fa-angle-up.component';

describe('FasFaAngleUpComponent', () => {
  let component: FasFaAngleUpComponent;
  let fixture: ComponentFixture<FasFaAngleUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAngleUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAngleUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
