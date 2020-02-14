import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContentsComponent } from './user-contents.component';

describe('UserContentsComponent', () => {
  let component: UserContentsComponent;
  let fixture: ComponentFixture<UserContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
