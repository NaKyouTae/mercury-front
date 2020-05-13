import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThreeComponent } from './my-three.component';

describe('MyThreeComponent', () => {
  let component: MyThreeComponent;
  let fixture: ComponentFixture<MyThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
