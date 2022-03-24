import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowsAltVComponent } from './fas-fa-arrows-alt-v.component';

describe('FasFaArrowsAltVComponent', () => {
  let component: FasFaArrowsAltVComponent;
  let fixture: ComponentFixture<FasFaArrowsAltVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowsAltVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowsAltVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
