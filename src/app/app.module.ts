import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './public/login/login.component';
import { ContactsComponent } from './public/contacts/contacts.component';
import { ShowsComponent } from './private/shows/shows.component';
import { ShowListComponent } from './private/shows/show-list/show-list.component';
import { ShowDetailComponent } from './private/shows/show-detail/show-detail.component';
import { TopBarComponent } from './private/layout/top-bar/top-bar.component';
import { FooterComponent } from './private/layout/footer/footer.component';
import { ContentComponent } from './private/layout/content/content.component';
import { HomeComponent } from './private/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent,
    ShowsComponent,
    ShowListComponent,
    ShowDetailComponent,
    TopBarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
