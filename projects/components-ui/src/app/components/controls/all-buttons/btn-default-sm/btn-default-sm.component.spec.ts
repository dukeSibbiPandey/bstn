import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDefaultSmComponent } from './btn-default-sm.component';

describe('BtnDefaultSmComponent', () => {
  let component: BtnDefaultSmComponent;
  let fixture: ComponentFixture<BtnDefaultSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDefaultSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDefaultSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
