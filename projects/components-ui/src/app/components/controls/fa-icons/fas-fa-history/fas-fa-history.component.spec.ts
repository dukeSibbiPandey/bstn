import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaHistoryComponent } from './fas-fa-history.component';

describe('FasFaHistoryComponent', () => {
  let component: FasFaHistoryComponent;
  let fixture: ComponentFixture<FasFaHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
