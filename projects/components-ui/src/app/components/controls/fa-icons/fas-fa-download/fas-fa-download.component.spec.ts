import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaDownloadComponent } from './fas-fa-download.component';

describe('FasFaDownloadComponent', () => {
  let component: FasFaDownloadComponent;
  let fixture: ComponentFixture<FasFaDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
