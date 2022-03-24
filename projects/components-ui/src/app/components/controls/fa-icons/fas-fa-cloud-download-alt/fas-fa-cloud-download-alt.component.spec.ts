import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCloudDownloadAltComponent } from './fas-fa-cloud-download-alt.component';

describe('FasFaCloudDownloadAltComponent', () => {
  let component: FasFaCloudDownloadAltComponent;
  let fixture: ComponentFixture<FasFaCloudDownloadAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCloudDownloadAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCloudDownloadAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
