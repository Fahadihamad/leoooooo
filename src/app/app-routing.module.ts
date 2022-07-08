
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './Layout/mainlayout/mainlayout.component';
import { AboutComponent } from './pages/about/about.component';
import { CandidatesDetailsComponent } from './pages/candidates-details/candidates-details.component';
import { CandidatesListComponent } from './pages/candidates-list/candidates-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateCandidatesComponent } from './pages/create-candidates/create-candidates.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginsuccessComponent } from './pages/loginsuccess/loginsuccess.component';
import { SigninComponent } from './pages/signin/signin.component';
import { TeamComponent } from './pages/team/team.component';
import { UpdateCandidatesComponent } from './pages/update-candidates/update-candidates.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
const routes: Routes = [
  {
    path:'loginsuccess',
component:LoginsuccessComponent},
{ path: '', redirectTo: 'candidates', pathMatch: 'full' },
{ path: 'candidatess', component: CandidatesListComponent },
{ path: 'add', component: CreateCandidatesComponent },
{ path: 'update/:id', component: UpdateCandidatesComponent },
{ path: 'details/:id', component: CandidatesDetailsComponent },
  
{ 
  path:'',
  component: MainlayoutComponent,
  children:[
    { 
  path:'',
  component:HomeComponent
    },
    {
      path:'userprofile',
      component:UserprofileComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'team',
      component:TeamComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'signin',
      component:SigninComponent
    },
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
