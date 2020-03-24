import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeListChildComponent } from './tree-list-child.component';

describe('TreeListChildComponent', () => {
  let component: TreeListChildComponent;
  let fixture: ComponentFixture<TreeListChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeListChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
