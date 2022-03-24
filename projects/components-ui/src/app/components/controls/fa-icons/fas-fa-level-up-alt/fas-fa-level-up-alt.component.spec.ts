import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaLevelUpAltComponent } from './fas-fa-level-up-alt.component';

describe('FasFaLevelUpAltComponent', () => {
  let component: FasFaLevelUpAltComponent;
  let fixture: ComponentFixture<FasFaLevelUpAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaLevelUpAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaLevelUpAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
