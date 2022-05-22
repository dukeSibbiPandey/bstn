import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabFaAccessibleIconComponent } from './fab-fa-accessible-icon.component';

describe('FabFaAccessibleIconComponent', () => {
  let component: FabFaAccessibleIconComponent;
  let fixture: ComponentFixture<FabFaAccessibleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabFaAccessibleIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabFaAccessibleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
