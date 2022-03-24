import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaPlayComponent } from './fas-fa-play.component';

describe('FasFaPlayComponent', () => {
  let component: FasFaPlayComponent;
  let fixture: ComponentFixture<FasFaPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
