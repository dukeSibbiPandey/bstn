import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaTextWidthComponent } from './fas-fa-text-width.component';

describe('FasFaTextWidthComponent', () => {
  let component: FasFaTextWidthComponent;
  let fixture: ComponentFixture<FasFaTextWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaTextWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaTextWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
