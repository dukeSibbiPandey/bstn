import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowLeftComponent } from './fas-fa-arrow-left.component';

describe('FasFaArrowLeftComponent', () => {
  let component: FasFaArrowLeftComponent;
  let fixture: ComponentFixture<FasFaArrowLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
