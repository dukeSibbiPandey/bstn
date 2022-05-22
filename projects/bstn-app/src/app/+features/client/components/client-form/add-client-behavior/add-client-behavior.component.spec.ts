import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientBehaviorComponent } from './add-client-behavior.component';

describe('AddClientBehaviorComponent', () => {
  let component: AddClientBehaviorComponent;
  let fixture: ComponentFixture<AddClientBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
