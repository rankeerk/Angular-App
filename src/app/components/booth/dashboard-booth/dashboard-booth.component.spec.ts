import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBoothComponent } from './dashboard-booth.component';

describe('DashboardBoothComponent', () => {
  let component: DashboardBoothComponent;
  let fixture: ComponentFixture<DashboardBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
