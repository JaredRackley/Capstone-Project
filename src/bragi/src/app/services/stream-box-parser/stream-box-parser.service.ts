import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from "../auth/auth.service";
import firebase from "firebase";

export interface IStreamBox {
  thumbnail: string;
  profilePic: string;
  streamName: string;
  streamer: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})

export class StreamBoxParserService {

  user: firebase.User | undefined;

  constructor(
    private fs: AngularFirestore,
    private auth: AuthService
  ) { }

  getStreamInfo() {
    this.auth.userDataObs.subscribe(u => this.user = u);
    let data = this.fs.collection("stream data").doc(this.user?.uid)
    // let streamData = data.get().subscribe(stream => console.debug(stream.data()));
  }
}
