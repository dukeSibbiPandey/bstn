import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaRecycleComponent } from './fas-fa-recycle.component';

describe('FasFaRecycleComponent', () => {
  let component: FasFaRecycleComponent;
  let fixture: ComponentFixture<FasFaRecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaRecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaRecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
