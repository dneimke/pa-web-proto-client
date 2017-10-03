import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServicesModule } from './services/services.module';

import { NavbarComponent } from './shared/navbar.component';
import { AppComponent } from './start/app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { AppRoutingModule } from './shared/app.routing';
import { FixturesModule } from './fixtures/fixtures.module';
import { ReportsModule } from './reports/reports.module';

@NgModule({
  imports: [
    BrowserModule,
    ServicesModule,
    FixturesModule,
    ReportsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
