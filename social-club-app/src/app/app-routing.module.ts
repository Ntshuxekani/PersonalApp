import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ContributionsComponent } from './Components/contributions/contributions.component';
import { MembersComponent } from './Components/members/members.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'contributions', component: ContributionsComponent },
  { path: 'members', component: MembersComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
