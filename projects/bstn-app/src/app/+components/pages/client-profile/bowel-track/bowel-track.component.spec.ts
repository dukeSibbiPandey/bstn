import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowelTrackComponent } from './bowel-track.component';

describe('BowelTrackComponent', () => {
  let component: BowelTrackComponent;
  let fixture: ComponentFixture<BowelTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowelTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowelTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
