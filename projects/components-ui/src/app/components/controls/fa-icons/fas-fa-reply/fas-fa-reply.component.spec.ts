import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaReplyComponent } from './fas-fa-reply.component';

describe('FasFaReplyComponent', () => {
  let component: FasFaReplyComponent;
  let fixture: ComponentFixture<FasFaReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
