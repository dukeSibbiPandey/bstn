import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSuccessSmComponent } from './btn-success-sm.component';

describe('BtnSuccessSmComponent', () => {
  let component: BtnSuccessSmComponent;
  let fixture: ComponentFixture<BtnSuccessSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSuccessSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSuccessSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
