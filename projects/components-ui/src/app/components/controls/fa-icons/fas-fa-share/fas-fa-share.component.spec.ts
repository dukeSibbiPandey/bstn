import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaShareComponent } from './fas-fa-share.component';

describe('FasFaShareComponent', () => {
  let component: FasFaShareComponent;
  let fixture: ComponentFixture<FasFaShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
