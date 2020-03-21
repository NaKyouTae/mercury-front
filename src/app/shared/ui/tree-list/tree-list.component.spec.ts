import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTreeListComponent } from './tree-list.component';

describe('CustomTreeListComponent', () => {
  let component: CustomTreeListComponent;
  let fixture: ComponentFixture<CustomTreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTreeListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
