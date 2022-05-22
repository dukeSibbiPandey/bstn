import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaHandPointerComponent } from './far-fa-hand-pointer.component';

describe('FarFaHandPointerComponent', () => {
  let component: FarFaHandPointerComponent;
  let fixture: ComponentFixture<FarFaHandPointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaHandPointerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaHandPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
