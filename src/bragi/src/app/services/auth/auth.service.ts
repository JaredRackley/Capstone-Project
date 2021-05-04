import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: firebase.User | undefined;
  userDataSubj: Subject<firebase.User | undefined> = new Subject<firebase.User | undefined>();
  userDataObs: Observable<firebase.User | undefined> = this.userDataSubj.asObservable();

  constructor(
    public afs: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public ngZone: NgZone,
    private router: Router
  ) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.userDataSubj.next(user); // Setting up user data in userData var
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') as string);
      } else {
        localStorage.setItem('user', '');
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string): any {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        if (result.user) {
          this.userDataSubj.next(result.user);
          this.userData = result.user;
        }
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string, username: string, profilePic?: string): any {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        if (result.user) {
          this.userDataSubj.next(result.user);
          this.userData = result.user;
          this.updateUsername(username);
          this.updateProfilePic('https://firebasestorage.googleapis.com/v0/b/capstone-project-team4.appspot.com/o/profilepic%2F1618891836010?alt=media&token=d1d12134-472e-4f5b-8ba2-0c53ef752f9a')
        }
        this.SetUserData(result.user);
        this.router.navigate(['home']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  SignOut(): any {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userDataSubj.next(undefined);
      this.router.navigate(['home']);
    });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string): any {
    return this.angularFireAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any): any {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user') as string;
    console.debug(`logged in: ${!(user === "")}`);
    return !(user === "");
  }

  checkUsername(username: string): any {
    username = username.toLowerCase()
    return this.db.object(`usernames/${username}`);
  }

  updateUsername(username: string): void {
    if (this.userData) {
      const userRef = this.afs.doc(`users/${this.userData.uid}`);
      this.userData.updateProfile({ displayName: username });
      userRef.set({
        displayName: username
      }, { merge: true })
      console.debug(`this is the username:${this.userData.displayName}`);

    }
  }

  updateProfilePic(profilePicURL: string): void {
    if (this.userData) {
      this.userData.updateProfile({ photoURL: profilePicURL });
    }
  }
}
