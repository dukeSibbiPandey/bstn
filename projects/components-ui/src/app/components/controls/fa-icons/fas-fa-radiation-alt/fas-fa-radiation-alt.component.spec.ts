import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaRadiationAltComponent } from './fas-fa-radiation-alt.component';

describe('FasFaRadiationAltComponent', () => {
  let component: FasFaRadiationAltComponent;
  let fixture: ComponentFixture<FasFaRadiationAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaRadiationAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaRadiationAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
