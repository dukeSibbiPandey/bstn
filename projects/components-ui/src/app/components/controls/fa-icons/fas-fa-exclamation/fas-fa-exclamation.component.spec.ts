import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaExclamationComponent } from './fas-fa-exclamation.component';

describe('FasFaExclamationComponent', () => {
  let component: FasFaExclamationComponent;
  let fixture: ComponentFixture<FasFaExclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaExclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaExclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
