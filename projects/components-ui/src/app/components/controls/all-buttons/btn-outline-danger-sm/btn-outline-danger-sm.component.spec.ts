import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineDangerSmComponent } from './btn-outline-danger-sm.component';

describe('BtnOutlineDangerSmComponent', () => {
  let component: BtnOutlineDangerSmComponent;
  let fixture: ComponentFixture<BtnOutlineDangerSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineDangerSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineDangerSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
