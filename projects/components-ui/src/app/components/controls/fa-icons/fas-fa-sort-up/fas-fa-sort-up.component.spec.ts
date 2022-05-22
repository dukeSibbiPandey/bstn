import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortUpComponent } from './fas-fa-sort-up.component';

describe('FasFaSortUpComponent', () => {
  let component: FasFaSortUpComponent;
  let fixture: ComponentFixture<FasFaSortUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
