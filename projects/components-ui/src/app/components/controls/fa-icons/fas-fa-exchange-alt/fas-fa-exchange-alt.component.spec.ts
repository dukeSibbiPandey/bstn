import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaExchangeAltComponent } from './fas-fa-exchange-alt.component';

describe('FasFaExchangeAltComponent', () => {
  let component: FasFaExchangeAltComponent;
  let fixture: ComponentFixture<FasFaExchangeAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaExchangeAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaExchangeAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
