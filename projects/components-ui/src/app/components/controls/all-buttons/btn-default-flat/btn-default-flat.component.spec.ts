import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDefaultFlatComponent } from './btn-default-flat.component';

describe('BtnDefaultFlatComponent', () => {
  let component: BtnDefaultFlatComponent;
  let fixture: ComponentFixture<BtnDefaultFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDefaultFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDefaultFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
