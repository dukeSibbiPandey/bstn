import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDefaultXsComponent } from './btn-default-xs.component';

describe('BtnDefaultXsComponent', () => {
  let component: BtnDefaultXsComponent;
  let fixture: ComponentFixture<BtnDefaultXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDefaultXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDefaultXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
