import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaHandPointRightComponent } from './fas-fa-hand-point-right.component';

describe('FasFaHandPointRightComponent', () => {
  let component: FasFaHandPointRightComponent;
  let fixture: ComponentFixture<FasFaHandPointRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaHandPointRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaHandPointRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
