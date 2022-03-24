import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaTtyComponent } from './fas-fa-tty.component';

describe('FasFaTtyComponent', () => {
  let component: FasFaTtyComponent;
  let fixture: ComponentFixture<FasFaTtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaTtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaTtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
