import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { AccountComponent } from './account/account.component';
import { SignupLoginComponent } from './login-signup/signup-login.component';
import { LiveComponent } from './live/live.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'browse/:category', component: BrowseComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/:streamer', component: AccountComponent },
  { path: 'login', component: SignupLoginComponent, data: { login: true } },
  { path: 'signup', component: SignupLoginComponent, data: { login: false } },
  { path: 'live', component: LiveComponent },
  { path: 'live/:streamer', component: LiveComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
