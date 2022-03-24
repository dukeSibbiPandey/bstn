import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaRandomComponent } from './fas-fa-random.component';

describe('FasFaRandomComponent', () => {
  let component: FasFaRandomComponent;
  let fixture: ComponentFixture<FasFaRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
