import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaUndoAltComponent } from './fas-fa-undo-alt.component';

describe('FasFaUndoAltComponent', () => {
  let component: FasFaUndoAltComponent;
  let fixture: ComponentFixture<FasFaUndoAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaUndoAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaUndoAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
