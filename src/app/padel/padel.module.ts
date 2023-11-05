import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadelMatchesComponent } from './padel-matches/padel-matches.component';
import { PadelMatchComponent } from './padel-match/padel-match.component';
import { PadelComponent } from './padel/padel.component';
import { RouterModule } from '@angular/router';
import { PadelRoutingModule } from './padel-routing.module';



@NgModule({
  declarations: [
    PadelMatchesComponent,
    PadelMatchComponent,
    PadelComponent
  ],
  imports: [CommonModule, PadelRoutingModule]
})
export class PadelModule { }
