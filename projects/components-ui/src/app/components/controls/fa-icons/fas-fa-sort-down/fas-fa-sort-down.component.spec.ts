import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortDownComponent } from './fas-fa-sort-down.component';

describe('FasFaSortDownComponent', () => {
  let component: FasFaSortDownComponent;
  let fixture: ComponentFixture<FasFaSortDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
