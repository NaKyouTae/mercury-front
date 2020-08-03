import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSxComponent } from './logo-sx.component';

describe('LogoSxComponent', () => {
  let component: LogoSxComponent;
  let fixture: ComponentFixture<LogoSxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoSxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
