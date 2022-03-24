import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaHandPointerComponent } from './fas-fa-hand-pointer.component';

describe('FasFaHandPointerComponent', () => {
  let component: FasFaHandPointerComponent;
  let fixture: ComponentFixture<FasFaHandPointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaHandPointerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaHandPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
