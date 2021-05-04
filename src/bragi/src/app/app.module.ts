import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { AccountComponent } from './account/account.component';
import { SignupLoginComponent } from './login-signup/signup-login.component';
import { LiveComponent } from './live/live.component';

// services
import { AuthService } from './services/auth/auth.service';
import { FirebaseService } from './services/firebase/firebase.service';

// components
import { StreamPreviewComponent } from "./components/stream-preview/stream-preview.component";
import { StreamBoxComponent } from './components/stream-box/stream-box.component';
import { CategoryBoxComponent } from './components/category-box/category-box.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';

// Angular
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from './material.module';
import { MatFileUploadModule } from 'mat-file-upload';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    AccountComponent,
    StreamPreviewComponent,
    SignupLoginComponent,
    StreamBoxComponent,
    CategoryBoxComponent,
    LiveComponent,
    AudioPlayerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFileUploadModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    FirebaseService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
