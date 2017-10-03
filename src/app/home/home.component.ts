import { Component } from '@angular/core';

import { CompetitionSeasonService } from '../services/competition-season.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']    
})
export class HomeComponent {

    message: string;

    constructor(private competitionSeasonService: CompetitionSeasonService) {
        this.message = competitionSeasonService.getMessage();
    }


}

