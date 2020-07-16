import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLComponent } from './logo-l.component';

describe('LogoLComponent', () => {
  let component: LogoLComponent;
  let fixture: ComponentFixture<LogoLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
