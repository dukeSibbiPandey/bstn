import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaUndoComponent } from './fas-fa-undo.component';

describe('FasFaUndoComponent', () => {
  let component: FasFaUndoComponent;
  let fixture: ComponentFixture<FasFaUndoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaUndoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaUndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
