import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSecondarySmComponent } from './btn-outline-secondary-sm.component';

describe('BtnOutlineSecondarySmComponent', () => {
  let component: BtnOutlineSecondarySmComponent;
  let fixture: ComponentFixture<BtnOutlineSecondarySmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSecondarySmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSecondarySmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
