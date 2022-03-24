import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaHandPointLeftComponent } from './far-fa-hand-point-left.component';

describe('FarFaHandPointLeftComponent', () => {
  let component: FarFaHandPointLeftComponent;
  let fixture: ComponentFixture<FarFaHandPointLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaHandPointLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaHandPointLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
