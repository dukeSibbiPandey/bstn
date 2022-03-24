import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCloudUploadAltComponent } from './fas-fa-cloud-upload-alt.component';

describe('FasFaCloudUploadAltComponent', () => {
  let component: FasFaCloudUploadAltComponent;
  let fixture: ComponentFixture<FasFaCloudUploadAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCloudUploadAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCloudUploadAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
