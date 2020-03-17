import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekWordComponent } from './week-word.component';

describe('WeekWordComponent', () => {
  let component: WeekWordComponent;
  let fixture: ComponentFixture<WeekWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
