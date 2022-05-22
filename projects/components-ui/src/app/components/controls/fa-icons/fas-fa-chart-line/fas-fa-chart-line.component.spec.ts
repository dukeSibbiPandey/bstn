import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChartLineComponent } from './fas-fa-chart-line.component';

describe('FasFaChartLineComponent', () => {
  let component: FasFaChartLineComponent;
  let fixture: ComponentFixture<FasFaChartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChartLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
