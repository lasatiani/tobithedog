import { Component, Input, OnInit } from '@angular/core';
import { PadelMatch } from '../models/padelMatch';
import { PadelService } from '../services/padel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-padel-match',
  templateUrl: './padel-match.component.html',
  styleUrls: ['./padel-match.component.scss']
})
export class PadelMatchComponent implements OnInit{

padelMatch: PadelMatch;

constructor(private padelService: PadelService,
            private route: ActivatedRoute) { }

ngOnInit(): void {
  const matchId: number = parseInt(this.route.snapshot.params['id']);
  this.padelMatch = this.padelService.getPadelMatchById(matchId)
}

}
