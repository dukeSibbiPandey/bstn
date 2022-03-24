import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAngleRightComponent } from './fas-fa-angle-right.component';

describe('FasFaAngleRightComponent', () => {
  let component: FasFaAngleRightComponent;
  let fixture: ComponentFixture<FasFaAngleRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAngleRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAngleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
