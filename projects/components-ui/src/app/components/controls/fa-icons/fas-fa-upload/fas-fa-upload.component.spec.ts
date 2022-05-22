import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaUploadComponent } from './fas-fa-upload.component';

describe('FasFaUploadComponent', () => {
  let component: FasFaUploadComponent;
  let fixture: ComponentFixture<FasFaUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
