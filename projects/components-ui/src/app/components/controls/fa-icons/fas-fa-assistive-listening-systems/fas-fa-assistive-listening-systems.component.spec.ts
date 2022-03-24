import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAssistiveListeningSystemsComponent } from './fas-fa-assistive-listening-systems.component';

describe('FasFaAssistiveListeningSystemsComponent', () => {
  let component: FasFaAssistiveListeningSystemsComponent;
  let fixture: ComponentFixture<FasFaAssistiveListeningSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAssistiveListeningSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAssistiveListeningSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
