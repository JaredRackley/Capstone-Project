import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AuthService } from '../auth/auth.service';
import { merge, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  thumbnailUrl$: Observable<string> | undefined
  thumbnail!: string;

  profilePicUrl$: Observable<string> | undefined
  profilePic!: string;

  constructor(
    private fs: AngularFirestore,
    private storage: AngularFireStorage,
    private auth: AuthService
  ) { }

  getStreamData(username: string) {
    return this.fs.collection("stream data").doc(username).get();
  }


  setStreamData(name: string, category: string) {
    this.fs.collection("stream data").doc(this.auth.userData?.displayName!).set({
      streamName: name,
      category: category,

    }, { merge: true })
  }



  getThumbnail() {
    return this.fs.collection("stream data").doc(this.auth.userData?.displayName as string).snapshotChanges();
  }

  getProfilePic(username: string) {
    return this.fs.collection("profilepic").doc(username).get();
  }

  // second paramater should be either profilepic or thumbnails
  private uploadProfilePic(url: string, imageType: string): void {
    this.fs.collection(`${imageType}`).doc(this.auth.userData?.displayName!).set({
      profilepic: url
    })
      .then(() => {
        console.log("successfully uploaded picture: " + url);
      })
      .catch(error => {
        console.warn("error uploading picture: " + error);
      });
  }

  private uploadThumbnail(url: string): void {
    console.log(this.auth.userData?.displayName)
    this.fs.collection('stream data').doc(this.auth.userData?.displayName!).set({
      thumbnail: url
    }, { merge: true })
      .then(() => {
        console.log("successfully uploaded picture: " + url);
      })
      .catch(error => {
        console.warn("error uploading picture: " + error);
      });
  }

  storeThumbnail(thumbnailFile: File) {
    const filePath = `thumbnails/${Date.now()}`;
    const fileRef = this.storage.ref(filePath);
    const task: AngularFireUploadTask = this.storage.upload(filePath, thumbnailFile);
    console.debug("executed store task");
    task.snapshotChanges().pipe(
      finalize(() => {
        this.thumbnailUrl$ = fileRef.getDownloadURL();
        console.debug("finalizing data: " + this.thumbnailUrl$);
        this.thumbnailUrl$.subscribe(url => {
          if (url) {
            this.thumbnail = url;
            console.debug(`thumbnail: ${url}`);
            this.uploadThumbnail(this.thumbnail);
          }
          return url;
        });
      }
      )).subscribe();
  }

  storeProfilePic(thumbnailFile: File): any {
    const filePath = `profilepic/${Date.now()}`;
    const fileRef = this.storage.ref(filePath);
    const task: AngularFireUploadTask = this.storage.upload(filePath, thumbnailFile);
    console.debug("executed store task");
    task.snapshotChanges().pipe(
      finalize(() => {
        this.profilePicUrl$ = fileRef.getDownloadURL();
        console.debug("finalizing data: " + this.thumbnailUrl$);
        this.profilePicUrl$.subscribe(url => {
          if (url) {
            this.profilePic = url;
            console.debug(`profilepic: ${url}`);
            this.uploadProfilePic(this.profilePic, 'profilepic');
            this.auth.updateProfilePic(this.profilePic);
          }
          return url;
        });
      }
      )).subscribe();
  }
}
