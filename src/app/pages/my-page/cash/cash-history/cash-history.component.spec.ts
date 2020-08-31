import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashHistoryComponent } from './cash-history.component';

describe('CashHistoryComponent', () => {
  let component: CashHistoryComponent;
  let fixture: ComponentFixture<CashHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
