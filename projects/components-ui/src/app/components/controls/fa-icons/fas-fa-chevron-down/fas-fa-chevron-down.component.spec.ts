import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChevronDownComponent } from './fas-fa-chevron-down.component';

describe('FasFaChevronDownComponent', () => {
  let component: FasFaChevronDownComponent;
  let fixture: ComponentFixture<FasFaChevronDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChevronDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChevronDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
