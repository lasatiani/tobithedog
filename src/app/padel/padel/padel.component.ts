import { Component, OnInit } from '@angular/core';
import { PadelMatch } from '../models/padelMatch';
import { PadelService } from '../services/padel.service';

@Component({
  selector: 'app-padel',
  templateUrl: './padel.component.html',
  styleUrls: ['./padel.component.scss']
})
export class PadelComponent implements OnInit {

padelMatches: PadelMatch[] = [];

constructor(private padelService: PadelService){}

ngOnInit(): void {
    this.padelMatches = this.padelService.getPadelMatches();
}

}
