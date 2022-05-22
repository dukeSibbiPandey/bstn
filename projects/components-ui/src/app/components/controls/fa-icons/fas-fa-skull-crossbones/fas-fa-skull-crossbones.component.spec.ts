import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSkullCrossbonesComponent } from './fas-fa-skull-crossbones.component';

describe('FasFaSkullCrossbonesComponent', () => {
  let component: FasFaSkullCrossbonesComponent;
  let fixture: ComponentFixture<FasFaSkullCrossbonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSkullCrossbonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSkullCrossbonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
