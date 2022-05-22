import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDangerXsComponent } from './btn-danger-xs.component';

describe('BtnDangerXsComponent', () => {
  let component: BtnDangerXsComponent;
  let fixture: ComponentFixture<BtnDangerXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDangerXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDangerXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
