import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadelComponent } from './padel/padel.component';
import { PadelMatchComponent } from './padel-match/padel-match.component';

const routes: Routes = [
  {
    path: '',
    component: PadelComponent
  },
  {
    path: ':id',
    component: PadelMatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PadelRoutingModule{}
