import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BstnThemeComponent } from './bstn-theme.component';

describe('BstnThemeComponent', () => {
  let component: BstnThemeComponent;
  let fixture: ComponentFixture<BstnThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BstnThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BstnThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
