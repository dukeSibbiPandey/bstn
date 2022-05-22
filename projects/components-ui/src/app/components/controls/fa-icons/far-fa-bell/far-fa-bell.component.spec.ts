import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaBellComponent } from './far-fa-bell.component';

describe('FarFaBellComponent', () => {
  let component: FarFaBellComponent;
  let fixture: ComponentFixture<FarFaBellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaBellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaBellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
