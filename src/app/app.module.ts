import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppHeaderComponent } from './core/app-header/app-header.component';


import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { LeadersModule } from './leaders/leaders.module';
import { IssuesModule } from './issues/issues.module';
import { InfluencersModule } from './influencers/influencers.module';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    LeadersModule,
    IssuesModule,
    InfluencersModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
