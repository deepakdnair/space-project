import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServices } from '../services/api.services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-space-dashboard',
  templateUrl: './space-dashboard.component.html',
  styleUrls: ['./space-dashboard.component.scss']
})
export class SpaceDashboardComponent implements OnInit {
  yearFilter: any = ['2006', '2007', '2008', '2009', '2010',
   '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
   spaceArray: any = [];
  params: any = {};
  isYearFilter: any;
  isLaunchFilter: any;
  isLandFilter: any;
  loading = false;
  constructor(private api: ApiServices,
              private activatedRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.params = { ...params };
      if (this.params.launch_year) {
        this.isYearFilter = this.params.launch_year;
      }
      if (this.params.launch_success) {
        this.isLaunchFilter = this.params.launch_success;
      }
      if (this.params.land_success) {
        this.isLandFilter = this.params.land_success;
      }

      console.log('year ' + this.isYearFilter);
      console.log('lanuch ' + this.isLaunchFilter);
      console.log('land ' + this.isLandFilter);
      this.getData();
    });

  }

  getData() {
    this.loading = true;
    this.api.getAllData(this.params).pipe(
      finalize(() => this.loading = false)
    ).subscribe(
      data => {
       this.spaceArray = data;
      }
    );
  }

  filterByYear(year) {
   this.params.launch_year = year;
   this.route.navigate([''], {queryParams: this.params});
  }
  filterByLaunching(flag) {
    this.params.launch_success = flag;
    this.route.navigate([''], {queryParams: this.params});
  }
  filterByLanding(flag) {
    this.params.land_success = flag;
    this.route.navigate([''], {queryParams: this.params});
  }

}
