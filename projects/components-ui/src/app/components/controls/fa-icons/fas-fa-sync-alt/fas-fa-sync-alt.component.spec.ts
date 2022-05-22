import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSyncAltComponent } from './fas-fa-sync-alt.component';

describe('FasFaSyncAltComponent', () => {
  let component: FasFaSyncAltComponent;
  let fixture: ComponentFixture<FasFaSyncAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSyncAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSyncAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
