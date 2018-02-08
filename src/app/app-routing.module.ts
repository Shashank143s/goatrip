import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdtimerComponent } from './cdtimer/cdtimer.component';
import { PeopleComponent } from './people/people.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';

const routes: Routes = [
  { path:'timer' , component: CdtimerComponent},
  { path:'people' , component: PeopleComponent},
  { path:'noticeboard' , component: NoticeboardComponent},
  { path:'**' , redirectTo:'/timer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
