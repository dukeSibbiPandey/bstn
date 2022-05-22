import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaHandPointRightComponent } from './far-fa-hand-point-right.component';

describe('FarFaHandPointRightComponent', () => {
  let component: FarFaHandPointRightComponent;
  let fixture: ComponentFixture<FarFaHandPointRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaHandPointRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaHandPointRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
