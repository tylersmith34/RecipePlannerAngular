import {Routes} from '@angular/router';
import {PlanningComponent} from './planning/planning.component';
import {AdminComponent} from './admin/admin.component';
import {ScheduleComponent} from './schedule/schedule.component';

export const routes: Routes = [
  {
    path: 'plan',
    component: PlanningComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    redirectTo: 'plan',
    pathMatch: 'full'
  }
];
