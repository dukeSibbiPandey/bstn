import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCartArrowDownComponent } from './fas-fa-cart-arrow-down.component';

describe('FasFaCartArrowDownComponent', () => {
  let component: FasFaCartArrowDownComponent;
  let fixture: ComponentFixture<FasFaCartArrowDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCartArrowDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCartArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
