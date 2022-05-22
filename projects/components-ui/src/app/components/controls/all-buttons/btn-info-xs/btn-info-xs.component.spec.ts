import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInfoXsComponent } from './btn-info-xs.component';

describe('BtnInfoXsComponent', () => {
  let component: BtnInfoXsComponent;
  let fixture: ComponentFixture<BtnInfoXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnInfoXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnInfoXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
