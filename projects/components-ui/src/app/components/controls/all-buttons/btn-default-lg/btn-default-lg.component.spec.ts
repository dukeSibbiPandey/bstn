import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDefaultLgComponent } from './btn-default-lg.component';

describe('BtnDefaultLgComponent', () => {
  let component: BtnDefaultLgComponent;
  let fixture: ComponentFixture<BtnDefaultLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDefaultLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDefaultLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
