import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaMousePointerComponent } from './fas-fa-mouse-pointer.component';

describe('FasFaMousePointerComponent', () => {
  let component: FasFaMousePointerComponent;
  let fixture: ComponentFixture<FasFaMousePointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaMousePointerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaMousePointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
