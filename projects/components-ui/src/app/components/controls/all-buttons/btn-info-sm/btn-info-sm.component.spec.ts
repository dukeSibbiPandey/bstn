import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInfoSmComponent } from './btn-info-sm.component';

describe('BtnInfoSmComponent', () => {
  let component: BtnInfoSmComponent;
  let fixture: ComponentFixture<BtnInfoSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnInfoSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnInfoSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
