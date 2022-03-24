import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaRadiationComponent } from './fas-fa-radiation.component';

describe('FasFaRadiationComponent', () => {
  let component: FasFaRadiationComponent;
  let fixture: ComponentFixture<FasFaRadiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaRadiationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaRadiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
