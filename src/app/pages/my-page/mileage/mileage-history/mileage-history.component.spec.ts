import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageHistoryComponent } from './mileage-history.component';

describe('MileageHistoryComponent', () => {
  let component: MileageHistoryComponent;
  let fixture: ComponentFixture<MileageHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MileageHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
