import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineInfoComponent } from './btn-outline-info.component';

describe('BtnOutlineInfoComponent', () => {
  let component: BtnOutlineInfoComponent;
  let fixture: ComponentFixture<BtnOutlineInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
