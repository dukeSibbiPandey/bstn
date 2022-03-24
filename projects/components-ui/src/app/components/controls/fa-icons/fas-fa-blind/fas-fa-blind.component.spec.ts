import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaBlindComponent } from './fas-fa-blind.component';

describe('FasFaBlindComponent', () => {
  let component: FasFaBlindComponent;
  let fixture: ComponentFixture<FasFaBlindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaBlindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaBlindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
