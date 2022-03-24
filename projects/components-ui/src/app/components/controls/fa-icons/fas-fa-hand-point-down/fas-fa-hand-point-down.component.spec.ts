import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaHandPointDownComponent } from './fas-fa-hand-point-down.component';

describe('FasFaHandPointDownComponent', () => {
  let component: FasFaHandPointDownComponent;
  let fixture: ComponentFixture<FasFaHandPointDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaHandPointDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaHandPointDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
