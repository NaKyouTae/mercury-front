import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageReqeustComponent } from './mileage-reqeust.component';

describe('MileageReqeustComponent', () => {
  let component: MileageReqeustComponent;
  let fixture: ComponentFixture<MileageReqeustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MileageReqeustComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileageReqeustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
