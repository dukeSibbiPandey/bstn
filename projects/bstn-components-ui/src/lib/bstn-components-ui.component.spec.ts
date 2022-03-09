import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BstnComponentsUiComponent } from './bstn-components-ui.component';

describe('BstnComponentsUiComponent', () => {
  let component: BstnComponentsUiComponent;
  let fixture: ComponentFixture<BstnComponentsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BstnComponentsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BstnComponentsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
