import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowelTrackingComponent } from './bowel-tracking.component';

describe('BowelTrackingComponent', () => {
  let component: BowelTrackingComponent;
  let fixture: ComponentFixture<BowelTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BowelTrackingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowelTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
