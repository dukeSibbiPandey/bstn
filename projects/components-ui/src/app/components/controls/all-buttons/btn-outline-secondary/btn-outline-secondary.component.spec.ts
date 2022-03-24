import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSecondaryComponent } from './btn-outline-secondary.component';

describe('BtnOutlineSecondaryComponent', () => {
  let component: BtnOutlineSecondaryComponent;
  let fixture: ComponentFixture<BtnOutlineSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
