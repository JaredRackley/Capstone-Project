import { Component, OnInit } from '@angular/core';
import { DataParserService } from "../services/data-parser/data-parser.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  streams: Array<{ username: string, viewerCount: number, streamName: string, category: string, thumbnail: string, profilePic: string }> = [];

  constructor(streamData: DataParserService) {
    this.streams = streamData.getLiveStreams();

    console.log(this.streams)
  }

  ngOnInit(): void {

  }

  sort() {
    return this.streams.sort((a, b) => b.viewerCount - a.viewerCount);
  }

  definedStream(stream: { username: string, viewerCount: number, streamName: string, category: string, thumbnail: string, profilePic: string }): boolean {
    return (
      stream.username !== undefined && stream.viewerCount !== undefined &&
      stream.streamName !== undefined && stream.category !== undefined &&
      stream.thumbnail !== undefined && stream.profilePic !== undefined
    )
  }

}