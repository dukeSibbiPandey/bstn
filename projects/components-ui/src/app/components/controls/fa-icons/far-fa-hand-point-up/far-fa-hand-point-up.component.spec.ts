import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaHandPointUpComponent } from './far-fa-hand-point-up.component';

describe('FarFaHandPointUpComponent', () => {
  let component: FarFaHandPointUpComponent;
  let fixture: ComponentFixture<FarFaHandPointUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaHandPointUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaHandPointUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
