import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaHandPointDownComponent } from './far-fa-hand-point-down.component';

describe('FarFaHandPointDownComponent', () => {
  let component: FarFaHandPointDownComponent;
  let fixture: ComponentFixture<FarFaHandPointDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaHandPointDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaHandPointDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
