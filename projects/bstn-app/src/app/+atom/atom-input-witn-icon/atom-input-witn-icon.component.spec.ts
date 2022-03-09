import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputWitnIconComponent } from './atom-input-witn-icon.component';

describe('AtomInputWitnIconComponent', () => {
  let component: AtomInputWitnIconComponent;
  let fixture: ComponentFixture<AtomInputWitnIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomInputWitnIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomInputWitnIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
