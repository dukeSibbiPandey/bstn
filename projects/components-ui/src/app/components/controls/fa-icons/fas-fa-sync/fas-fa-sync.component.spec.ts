import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSyncComponent } from './fas-fa-sync.component';

describe('FasFaSyncComponent', () => {
  let component: FasFaSyncComponent;
  let fixture: ComponentFixture<FasFaSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
