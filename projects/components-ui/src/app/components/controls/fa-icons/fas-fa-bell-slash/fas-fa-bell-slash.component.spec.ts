import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaBellSlashComponent } from './fas-fa-bell-slash.component';

describe('FasFaBellSlashComponent', () => {
  let component: FasFaBellSlashComponent;
  let fixture: ComponentFixture<FasFaBellSlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaBellSlashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaBellSlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
