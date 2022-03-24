import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCompressArrowsAltComponent } from './fas-fa-compress-arrows-alt.component';

describe('FasFaCompressArrowsAltComponent', () => {
  let component: FasFaCompressArrowsAltComponent;
  let fixture: ComponentFixture<FasFaCompressArrowsAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCompressArrowsAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCompressArrowsAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
