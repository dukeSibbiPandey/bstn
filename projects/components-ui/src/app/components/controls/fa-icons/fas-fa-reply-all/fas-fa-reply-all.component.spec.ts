import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaReplyAllComponent } from './fas-fa-reply-all.component';

describe('FasFaReplyAllComponent', () => {
  let component: FasFaReplyAllComponent;
  let fixture: ComponentFixture<FasFaReplyAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaReplyAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaReplyAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
