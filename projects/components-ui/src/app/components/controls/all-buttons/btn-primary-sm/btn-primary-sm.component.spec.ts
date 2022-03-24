import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimarySmComponent } from './btn-primary-sm.component';

describe('BtnPrimarySmComponent', () => {
  let component: BtnPrimarySmComponent;
  let fixture: ComponentFixture<BtnPrimarySmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPrimarySmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPrimarySmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
