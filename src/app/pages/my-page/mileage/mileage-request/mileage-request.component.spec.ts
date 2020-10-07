import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageRequestComponent } from './mileage-request.component';

describe('MileageRequestComponent', () => {
  let component: MileageRequestComponent;
  let fixture: ComponentFixture<MileageRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MileageRequestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileageRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
