import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainlayoutComponent } from './Layout/mainlayout/mainlayout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { TeamComponent } from './pages/team/team.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './pages/loginsuccess/loginsuccess.component';
import { DeleteCandidatesComponent } from './pages/delete-candidates/delete-candidates.component';
import { CandidatesDetailsComponent } from './pages/candidates-details/candidates-details.component';
import { UpdateCandidatesComponent } from './pages/update-candidates/update-candidates.component';
import { CandidatesListComponent } from './pages/candidates-list/candidates-list.component';
import { CreateCandidatesComponent } from './pages/create-candidates/create-candidates.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    HomeComponent,
    UserprofileComponent,
    LoginComponent,
    SigninComponent,
    ContactComponent,
    AboutComponent,
    UserdetailsComponent,
    TeamComponent,
    LoginsuccessComponent,
    DeleteCandidatesComponent,
    CandidatesDetailsComponent,
    UpdateCandidatesComponent,
    CandidatesListComponent,
    CreateCandidatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
