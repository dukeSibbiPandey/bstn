import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSignLanguageComponent } from './fas-fa-sign-language.component';

describe('FasFaSignLanguageComponent', () => {
  let component: FasFaSignLanguageComponent;
  let fixture: ComponentFixture<FasFaSignLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSignLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSignLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
