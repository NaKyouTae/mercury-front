import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorGridComponent } from './honor-grid.component';

describe('HonorGridComponent', () => {
  let component: HonorGridComponent;
  let fixture: ComponentFixture<HonorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonorGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
