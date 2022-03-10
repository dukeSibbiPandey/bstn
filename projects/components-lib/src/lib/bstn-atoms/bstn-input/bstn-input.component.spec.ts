import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BstnInputComponent } from './bstn-input.component';

describe('BstnInputComponent', () => {
  let component: BstnInputComponent;
  let fixture: ComponentFixture<BstnInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BstnInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BstnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
