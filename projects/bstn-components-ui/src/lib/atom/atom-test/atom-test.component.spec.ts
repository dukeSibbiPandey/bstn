import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomTestComponent } from './atom-test.component';

describe('AtomTestComponent', () => {
  let component: AtomTestComponent;
  let fixture: ComponentFixture<AtomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
