import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDefaultDisabledComponent } from './btn-default-disabled.component';

describe('BtnDefaultDisabledComponent', () => {
  let component: BtnDefaultDisabledComponent;
  let fixture: ComponentFixture<BtnDefaultDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDefaultDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDefaultDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
