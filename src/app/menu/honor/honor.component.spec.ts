import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorComponent } from './honor.component';

describe('HonorComponent', () => {
  let component: HonorComponent;
  let fixture: ComponentFixture<HonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
