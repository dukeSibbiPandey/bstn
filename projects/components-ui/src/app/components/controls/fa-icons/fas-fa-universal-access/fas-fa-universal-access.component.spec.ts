import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaUniversalAccessComponent } from './fas-fa-universal-access.component';

describe('FasFaUniversalAccessComponent', () => {
  let component: FasFaUniversalAccessComponent;
  let fixture: ComponentFixture<FasFaUniversalAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaUniversalAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaUniversalAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
