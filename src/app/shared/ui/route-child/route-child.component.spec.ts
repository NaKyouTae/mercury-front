import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildComponent } from './route-child.component';

describe('RouteChildComponent', () => {
  let component: RouteChildComponent;
  let fixture: ComponentFixture<RouteChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
