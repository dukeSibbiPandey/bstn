import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDangerSmComponent } from './btn-danger-sm.component';

describe('BtnDangerSmComponent', () => {
  let component: BtnDangerSmComponent;
  let fixture: ComponentFixture<BtnDangerSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDangerSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDangerSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
