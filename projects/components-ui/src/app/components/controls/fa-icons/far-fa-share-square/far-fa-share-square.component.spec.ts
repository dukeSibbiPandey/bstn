import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaShareSquareComponent } from './far-fa-share-square.component';

describe('FarFaShareSquareComponent', () => {
  let component: FarFaShareSquareComponent;
  let fixture: ComponentFixture<FarFaShareSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaShareSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaShareSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
