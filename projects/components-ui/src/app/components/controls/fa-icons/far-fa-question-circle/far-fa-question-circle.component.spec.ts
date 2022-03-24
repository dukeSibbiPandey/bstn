import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaQuestionCircleComponent } from './far-fa-question-circle.component';

describe('FarFaQuestionCircleComponent', () => {
  let component: FarFaQuestionCircleComponent;
  let fixture: ComponentFixture<FarFaQuestionCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaQuestionCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaQuestionCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
