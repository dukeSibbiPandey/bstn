import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChevronUpComponent } from './fas-fa-chevron-up.component';

describe('FasFaChevronUpComponent', () => {
  let component: FasFaChevronUpComponent;
  let fixture: ComponentFixture<FasFaChevronUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChevronUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChevronUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
