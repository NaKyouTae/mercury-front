import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollSelectComponent } from './infinite-scroll-select.component';

describe('InfiniteScrollSelectComponent', () => {
  let component: InfiniteScrollSelectComponent;
  let fixture: ComponentFixture<InfiniteScrollSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
