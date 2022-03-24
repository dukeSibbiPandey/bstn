import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaRedoAltComponent } from './fas-fa-redo-alt.component';

describe('FasFaRedoAltComponent', () => {
  let component: FasFaRedoAltComponent;
  let fixture: ComponentFixture<FasFaRedoAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaRedoAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaRedoAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
