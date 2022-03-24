import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSuccessXsComponent } from './btn-success-xs.component';

describe('BtnSuccessXsComponent', () => {
  let component: BtnSuccessXsComponent;
  let fixture: ComponentFixture<BtnSuccessXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSuccessXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSuccessXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
