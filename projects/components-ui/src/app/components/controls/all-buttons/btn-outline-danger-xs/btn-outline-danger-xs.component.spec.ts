import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineDangerXsComponent } from './btn-outline-danger-xs.component';

describe('BtnOutlineDangerXsComponent', () => {
  let component: BtnOutlineDangerXsComponent;
  let fixture: ComponentFixture<BtnOutlineDangerXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineDangerXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineDangerXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
