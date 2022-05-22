import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAudioDescriptionComponent } from './fas-fa-audio-description.component';

describe('FasFaAudioDescriptionComponent', () => {
  let component: FasFaAudioDescriptionComponent;
  let fixture: ComponentFixture<FasFaAudioDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAudioDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAudioDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
