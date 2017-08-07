import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {ApiService} from './core/api.service';
import {PlanningComponent} from './planning/planning.component';
import {TagListComponent} from './planning/tag-list/tag-list.component';
import {AdminComponent} from './admin/admin.component';
import {routes} from './app.routes';
import {RecipesService} from './shared/recipes.service';
import {ScheduleComponent} from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent
    , NavComponent
    , FooterComponent
    , PlanningComponent
    , TagListComponent
    , AdminComponent, ScheduleComponent
  ],
  imports: [
    NgbModule
    , BrowserModule
    , FormsModule
    , HttpModule
    , RouterModule.forRoot(routes)

  ],
  providers: [ApiService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
