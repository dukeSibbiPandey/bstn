import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInfoFlatComponent } from './btn-info-flat.component';

describe('BtnInfoFlatComponent', () => {
  let component: BtnInfoFlatComponent;
  let fixture: ComponentFixture<BtnInfoFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnInfoFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnInfoFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
