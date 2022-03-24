import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSuccessFlatComponent } from './btn-success-flat.component';

describe('BtnSuccessFlatComponent', () => {
  let component: BtnSuccessFlatComponent;
  let fixture: ComponentFixture<BtnSuccessFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSuccessFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSuccessFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
