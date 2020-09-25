import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentFormPreviewComponent } from './recent-form-preview.component';

describe('RecentFormPreviewComponent', () => {
  let component: RecentFormPreviewComponent;
  let fixture: ComponentFixture<RecentFormPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentFormPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentFormPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
