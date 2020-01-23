import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertTwoComponent } from './advert-two.component';

describe('AdvertTwoComponent', () => {
  let component: AdvertTwoComponent;
  let fixture: ComponentFixture<AdvertTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
