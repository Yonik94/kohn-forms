import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceFieldComponent } from './multiple-choice-field.component';

describe('MultipleChoiceFieldComponent', () => {
  let component: MultipleChoiceFieldComponent;
  let fixture: ComponentFixture<MultipleChoiceFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
