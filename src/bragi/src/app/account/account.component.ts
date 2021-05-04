import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FirebaseService } from '../services/firebase/firebase.service';
import firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  profilePic!: string;
  thumbnail: string | undefined;

  authenticated = false;
  user: firebase.User | undefined;
  startStreamForm = this.formBuilder.group({
    streamName: '',
    category: ''
  });

  constructor(private auth: AuthService, private fire: FirebaseService, private formBuilder: FormBuilder, private router: Router) {
    this.user = auth.userData;
    if (auth.isLoggedIn) {
      this.authenticated = true;
    }

    // get thumbnail from firebase if it exists
    if (this.authenticated) {
      this.fire.getThumbnail().subscribe(snapshot =>
        snapshot.payload.exists ? this.thumbnail = this.thumbnail = snapshot.payload.get("thumbnail") : this.thumbnail = undefined);
      console.debug(`this is the thumbnail on account init: ${String(this.thumbnail)}`);
    }
  }


  onUploadClicked(file: FileList): void {
    this.fire.storeThumbnail(file[0]);
    this.fire.getThumbnail().subscribe(snapshot => this.thumbnail = snapshot.payload.get("thumbnail"));
  }

  onProfileUploadClicked(file: FileList): void {
    this.fire.storeProfilePic(file[0]).then(() =>
      this.auth.userDataObs.subscribe(u => {
        this.user = u;
        if (this.user!!) {
          this.authenticated = true;
        }
      })
    );
  }

  onSubmit() {
    console.log("in the submit func")
    console.log()
    const sname = this.startStreamForm.get("streamName")?.value;
    const cat = this.startStreamForm.get("category")?.value
    this.fire.setStreamData(sname, cat)
    this.router.navigate([`live/${this.user?.displayName}`])
  }

}
