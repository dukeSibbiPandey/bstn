import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaHandPointUpComponent } from './fas-fa-hand-point-up.component';

describe('FasFaHandPointUpComponent', () => {
  let component: FasFaHandPointUpComponent;
  let fixture: ComponentFixture<FasFaHandPointUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaHandPointUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaHandPointUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
