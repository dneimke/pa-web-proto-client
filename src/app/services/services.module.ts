import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionSeasonService } from './competition-season.service';
import { CompetitionService } from './competition.service';
import { FixtureService } from './fixture.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    CompetitionSeasonService,
    CompetitionService,
    FixtureService
  ]
})
export class ServicesModule { }
