import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilitiesDashboardComponent } from './probabilities-dashboard.component';

describe('ProbabilitiesDashboardComponent', () => {
  let component: ProbabilitiesDashboardComponent;
  let fixture: ComponentFixture<ProbabilitiesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbabilitiesDashboardComponent]
    });
    fixture = TestBed.createComponent(ProbabilitiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
