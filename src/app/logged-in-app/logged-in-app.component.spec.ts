import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInAppComponent } from './logged-in-app.component';

describe('LoggedInAppComponent', () => {
  let component: LoggedInAppComponent;
  let fixture: ComponentFixture<LoggedInAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
