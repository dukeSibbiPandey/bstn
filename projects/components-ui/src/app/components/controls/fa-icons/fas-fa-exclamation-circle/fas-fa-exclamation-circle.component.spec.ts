import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaExclamationCircleComponent } from './fas-fa-exclamation-circle.component';

describe('FasFaExclamationCircleComponent', () => {
  let component: FasFaExclamationCircleComponent;
  let fixture: ComponentFixture<FasFaExclamationCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaExclamationCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaExclamationCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
