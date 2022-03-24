import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaExclamationTriangleComponent } from './fas-fa-exclamation-triangle.component';

describe('FasFaExclamationTriangleComponent', () => {
  let component: FasFaExclamationTriangleComponent;
  let fixture: ComponentFixture<FasFaExclamationTriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaExclamationTriangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaExclamationTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
