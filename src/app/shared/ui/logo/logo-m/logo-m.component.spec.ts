import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMComponent } from './logo-m.component';

describe('LogoMComponent', () => {
  let component: LogoMComponent;
  let fixture: ComponentFixture<LogoMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
