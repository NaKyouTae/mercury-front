import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSComponent } from './logo-s.component';

describe('LogoSComponent', () => {
  let component: LogoSComponent;
  let fixture: ComponentFixture<LogoSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
