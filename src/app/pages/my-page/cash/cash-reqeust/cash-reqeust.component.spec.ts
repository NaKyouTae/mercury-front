import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReqeustComponent } from './cash-reqeust.component';

describe('CashReqeustComponent', () => {
  let component: CashReqeustComponent;
  let fixture: ComponentFixture<CashReqeustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashReqeustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashReqeustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
