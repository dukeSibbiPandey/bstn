import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaTextHeightComponent } from './fas-fa-text-height.component';

describe('FasFaTextHeightComponent', () => {
  let component: FasFaTextHeightComponent;
  let fixture: ComponentFixture<FasFaTextHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaTextHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaTextHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
