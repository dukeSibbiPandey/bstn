import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineDangerComponent } from './btn-outline-danger.component';

describe('BtnOutlineDangerComponent', () => {
  let component: BtnOutlineDangerComponent;
  let fixture: ComponentFixture<BtnOutlineDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineDangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
