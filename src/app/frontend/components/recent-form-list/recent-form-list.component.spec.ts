import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentFormListComponent } from './recent-form-list.component';

describe('RecentFormsComponent', () => {
  let component: RecentFormListComponent;
  let fixture: ComponentFixture<RecentFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
