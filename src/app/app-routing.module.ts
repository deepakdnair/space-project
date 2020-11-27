import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceDashboardComponent } from './space-dashboard/space-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceDashboardComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
