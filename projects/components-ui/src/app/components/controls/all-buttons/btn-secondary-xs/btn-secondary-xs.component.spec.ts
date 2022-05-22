import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSecondaryXsComponent } from './btn-secondary-xs.component';

describe('BtnSecondaryXsComponent', () => {
  let component: BtnSecondaryXsComponent;
  let fixture: ComponentFixture<BtnSecondaryXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSecondaryXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSecondaryXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
