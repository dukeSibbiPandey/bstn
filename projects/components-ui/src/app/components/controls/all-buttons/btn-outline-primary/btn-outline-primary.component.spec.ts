import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlinePrimaryComponent } from './btn-outline-primary.component';

describe('BtnOutlinePrimaryComponent', () => {
  let component: BtnOutlinePrimaryComponent;
  let fixture: ComponentFixture<BtnOutlinePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlinePrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlinePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
