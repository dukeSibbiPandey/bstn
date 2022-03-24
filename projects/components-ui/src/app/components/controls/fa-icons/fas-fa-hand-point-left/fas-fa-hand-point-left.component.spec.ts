import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaHandPointLeftComponent } from './fas-fa-hand-point-left.component';

describe('FasFaHandPointLeftComponent', () => {
  let component: FasFaHandPointLeftComponent;
  let fixture: ComponentFixture<FasFaHandPointLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaHandPointLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaHandPointLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
