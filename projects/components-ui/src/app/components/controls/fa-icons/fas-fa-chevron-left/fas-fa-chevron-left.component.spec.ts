import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChevronLeftComponent } from './fas-fa-chevron-left.component';

describe('FasFaChevronLeftComponent', () => {
  let component: FasFaChevronLeftComponent;
  let fixture: ComponentFixture<FasFaChevronLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChevronLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChevronLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
