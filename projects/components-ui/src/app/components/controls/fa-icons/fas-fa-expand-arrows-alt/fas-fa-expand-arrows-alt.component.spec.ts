import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaExpandArrowsAltComponent } from './fas-fa-expand-arrows-alt.component';

describe('FasFaExpandArrowsAltComponent', () => {
  let component: FasFaExpandArrowsAltComponent;
  let fixture: ComponentFixture<FasFaExpandArrowsAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaExpandArrowsAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaExpandArrowsAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
