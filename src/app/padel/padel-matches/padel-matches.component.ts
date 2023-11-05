import { Component, Input, OnInit } from '@angular/core';
import { PadelMatch } from '../models/padelMatch';
import { PadelService } from '../services/padel.service';

@Component({
  selector: 'app-padel-matches',
  templateUrl: './padel-matches.component.html',
  styleUrls: ['./padel-matches.component.scss']
})
export class PadelMatchesComponent {
  @Input() padelMatches: PadelMatch[] = [];
}
