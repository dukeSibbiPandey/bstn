import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaExpandAltComponent } from './fas-fa-expand-alt.component';

describe('FasFaExpandAltComponent', () => {
  let component: FasFaExpandAltComponent;
  let fixture: ComponentFixture<FasFaExpandAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaExpandAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaExpandAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
