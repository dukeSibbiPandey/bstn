import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSecondaryXsComponent } from './btn-outline-secondary-xs.component';

describe('BtnOutlineSecondaryXsComponent', () => {
  let component: BtnOutlineSecondaryXsComponent;
  let fixture: ComponentFixture<BtnOutlineSecondaryXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSecondaryXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSecondaryXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
