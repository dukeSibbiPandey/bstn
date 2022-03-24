import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChevronRightComponent } from './fas-fa-chevron-right.component';

describe('FasFaChevronRightComponent', () => {
  let component: FasFaChevronRightComponent;
  let fixture: ComponentFixture<FasFaChevronRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChevronRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChevronRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
