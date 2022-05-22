import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaPhoneVolumeComponent } from './fas-fa-phone-volume.component';

describe('FasFaPhoneVolumeComponent', () => {
  let component: FasFaPhoneVolumeComponent;
  let fixture: ComponentFixture<FasFaPhoneVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaPhoneVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaPhoneVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
