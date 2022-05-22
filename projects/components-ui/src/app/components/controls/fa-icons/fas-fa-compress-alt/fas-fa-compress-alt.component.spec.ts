import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaCompressAltComponent } from './fas-fa-compress-alt.component';

describe('FasFaCompressAltComponent', () => {
  let component: FasFaCompressAltComponent;
  let fixture: ComponentFixture<FasFaCompressAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaCompressAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaCompressAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
