import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineInfoSmComponent } from './btn-outline-info-sm.component';

describe('BtnOutlineInfoSmComponent', () => {
  let component: BtnOutlineInfoSmComponent;
  let fixture: ComponentFixture<BtnOutlineInfoSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineInfoSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineInfoSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
