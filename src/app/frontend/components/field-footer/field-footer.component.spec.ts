import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFooterComponent } from './field-footer.component';

describe('FieldFooterComponent', () => {
  let component: FieldFooterComponent;
  let fixture: ComponentFixture<FieldFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
