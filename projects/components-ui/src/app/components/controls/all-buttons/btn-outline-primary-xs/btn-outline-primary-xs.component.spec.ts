import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlinePrimaryXsComponent } from './btn-outline-primary-xs.component';

describe('BtnOutlinePrimaryXsComponent', () => {
  let component: BtnOutlinePrimaryXsComponent;
  let fixture: ComponentFixture<BtnOutlinePrimaryXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlinePrimaryXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlinePrimaryXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
