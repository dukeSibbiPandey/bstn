import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaBellSlashComponent } from './far-fa-bell-slash.component';

describe('FarFaBellSlashComponent', () => {
  let component: FarFaBellSlashComponent;
  let fixture: ComponentFixture<FarFaBellSlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaBellSlashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaBellSlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
