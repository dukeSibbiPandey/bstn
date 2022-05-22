import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSecondarySmComponent } from './btn-secondary-sm.component';

describe('BtnSecondarySmComponent', () => {
  let component: BtnSecondarySmComponent;
  let fixture: ComponentFixture<BtnSecondarySmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSecondarySmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSecondarySmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
