import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FirebaseService } from '../firebase/firebase.service';
import { AuthService } from '../auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataParserService {

  server = {
    url: 'http://184.72.103.90',
    port: ':42069'
  };

  constructor(private http: HttpClient, private fire: FirebaseService, private auth: AuthService) { }

  getLiveStreams(): Array<{ username: string, viewerCount: number, streamName: string, category: string, thumbnail: string, profilePic: string }> {
    const streams: Array<{ username: string, viewerCount: number, streamName: string, category: string, thumbnail: string, profilePic: string }> = [];
    this.http.get<any>(`${this.server.url}${this.server.port}/streams/active`).subscribe((data) => {
      Object.keys(data).forEach(username => {
        let profilePic = '';
        this.fire.getProfilePic(username).subscribe(picData => profilePic = picData.get("profilepic"));
        this.fire.getStreamData(username).subscribe(streamData => {
          // console.log(username)

          // console.log("profile pic: ")
          // console.log(this.auth.userData?.photoURL!)
          streams.push({
            username: username,
            streamName: streamData.get("streamName"),
            category: streamData.get("category"),
            thumbnail: streamData.get("thumbnail"),
            viewerCount: data[username],
            profilePic: profilePic
          });

        });

        // console.debug(`${username} : ${data[username]}`);
      });

    });
    return streams;
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.server.url}${this.server.port}/streams/categories`);
  }
}
