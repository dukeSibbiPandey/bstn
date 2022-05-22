import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaShareSquareComponent } from './fas-fa-share-square.component';

describe('FasFaShareSquareComponent', () => {
  let component: FasFaShareSquareComponent;
  let fixture: ComponentFixture<FasFaShareSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaShareSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaShareSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
