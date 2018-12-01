import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { HomeComponent } from './private/home/home.component';
import { ShowsComponent } from './private/shows/shows.component';
import { ShowListComponent } from './private/shows/show-list/show-list.component';
import { ShowDetailComponent } from './private/shows/show-detail/show-detail.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' }
  ,
  { path: 'login', component: LoginComponent },

  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '', component: ShowsComponent,
        children: [
          { path: '', component: ShowListComponent },
          { path: 'list', component: ShowListComponent },

          { path: 'detail/:id', component: ShowDetailComponent },

        ]
      }
    ]

  },


  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
