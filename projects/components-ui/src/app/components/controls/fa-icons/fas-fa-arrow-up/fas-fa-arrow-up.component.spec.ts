import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowUpComponent } from './fas-fa-arrow-up.component';

describe('FasFaArrowUpComponent', () => {
  let component: FasFaArrowUpComponent;
  let fixture: ComponentFixture<FasFaArrowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
