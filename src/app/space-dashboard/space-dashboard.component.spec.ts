import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { SpaceDashboardComponent } from './space-dashboard.component';

export class MockActivatedRoute {

  params: { [key: string]: any } = {
    launch_year: '2020',
    launch_success: 'true',
    land_success: 'true'
  };

  constructor() {
  }

  get queryParams(): Observable<any> {
    return of(this.params);
  }

}

describe('SpaceDashboardComponent', () => {
  let component: SpaceDashboardComponent;
  let fixture: ComponentFixture<SpaceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ SpaceDashboardComponent ],
      providers: [
      //  {provide: ActivatedRoute, useClass: MockActivatedRoute},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnInit exist for SpaceDashboardComponent', () => {
    expect(component.ngOnInit());
  });
  it('should call filterByYear', () => {
    expect(component.filterByYear('2020'));
    expect(component.params.launch_year).toBe('2020');
  });
  it('should call filterByLaunching', () => {
    expect(component.filterByLaunching('true'));
    expect(component.params.launch_success).toBe('true');
  });
  it('should call filterByYear', () => {
    expect(component.filterByLanding('false'));
    expect(component.params.land_success).toBe('false');
  });
});
