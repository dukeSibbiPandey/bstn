import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaRedoComponent } from './fas-fa-redo.component';

describe('FasFaRedoComponent', () => {
  let component: FasFaRedoComponent;
  let fixture: ComponentFixture<FasFaRedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaRedoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaRedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
