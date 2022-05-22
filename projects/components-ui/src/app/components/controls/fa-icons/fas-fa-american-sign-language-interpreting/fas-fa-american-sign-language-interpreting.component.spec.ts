import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaAmericanSignLanguageInterpretingComponent } from './fas-fa-american-sign-language-interpreting.component';

describe('FasFaAmericanSignLanguageInterpretingComponent', () => {
  let component: FasFaAmericanSignLanguageInterpretingComponent;
  let fixture: ComponentFixture<FasFaAmericanSignLanguageInterpretingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaAmericanSignLanguageInterpretingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaAmericanSignLanguageInterpretingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
