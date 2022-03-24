import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaRetweetComponent } from './fas-fa-retweet.component';

describe('FasFaRetweetComponent', () => {
  let component: FasFaRetweetComponent;
  let fixture: ComponentFixture<FasFaRetweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaRetweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaRetweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
