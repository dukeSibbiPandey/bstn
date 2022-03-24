import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimaryXsComponent } from './btn-primary-xs.component';

describe('BtnPrimaryXsComponent', () => {
  let component: BtnPrimaryXsComponent;
  let fixture: ComponentFixture<BtnPrimaryXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPrimaryXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPrimaryXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
