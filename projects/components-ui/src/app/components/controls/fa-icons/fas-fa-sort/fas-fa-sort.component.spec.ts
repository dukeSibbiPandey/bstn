import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortComponent } from './fas-fa-sort.component';

describe('FasFaSortComponent', () => {
  let component: FasFaSortComponent;
  let fixture: ComponentFixture<FasFaSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
