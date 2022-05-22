import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaBellComponent } from './fas-fa-bell.component';

describe('FasFaBellComponent', () => {
  let component: FasFaBellComponent;
  let fixture: ComponentFixture<FasFaBellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaBellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaBellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
