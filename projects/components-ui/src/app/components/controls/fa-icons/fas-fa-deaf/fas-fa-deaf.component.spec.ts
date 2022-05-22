import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaDeafComponent } from './fas-fa-deaf.component';

describe('FasFaDeafComponent', () => {
  let component: FasFaDeafComponent;
  let fixture: ComponentFixture<FasFaDeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaDeafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaDeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
