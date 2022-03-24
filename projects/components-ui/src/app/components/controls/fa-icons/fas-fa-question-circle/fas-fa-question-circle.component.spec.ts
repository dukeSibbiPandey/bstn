import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaQuestionCircleComponent } from './fas-fa-question-circle.component';

describe('FasFaQuestionCircleComponent', () => {
  let component: FasFaQuestionCircleComponent;
  let fixture: ComponentFixture<FasFaQuestionCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaQuestionCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaQuestionCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
