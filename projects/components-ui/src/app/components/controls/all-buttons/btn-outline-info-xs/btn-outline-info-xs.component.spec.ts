import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineInfoXsComponent } from './btn-outline-info-xs.component';

describe('BtnOutlineInfoXsComponent', () => {
  let component: BtnOutlineInfoXsComponent;
  let fixture: ComponentFixture<BtnOutlineInfoXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineInfoXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineInfoXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
