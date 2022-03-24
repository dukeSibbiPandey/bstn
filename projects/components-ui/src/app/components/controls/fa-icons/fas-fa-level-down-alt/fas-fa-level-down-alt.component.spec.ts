import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaLevelDownAltComponent } from './fas-fa-level-down-alt.component';

describe('FasFaLevelDownAltComponent', () => {
  let component: FasFaLevelDownAltComponent;
  let fixture: ComponentFixture<FasFaLevelDownAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaLevelDownAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaLevelDownAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
