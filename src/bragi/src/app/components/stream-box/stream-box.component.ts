import { Component, Input, OnInit } from '@angular/core';
import {
  StreamBoxParserService,
  IStreamBox,
} from '../../services/stream-box-parser/stream-box-parser.service';

@Component({
  selector: 'stream-box',
  template: `
    <div
      [ngClass]="{ 'mat-elevation-z6': streamBoxHovered }"
      class="stream-box-container"
      (mouseover)="streamBoxHovered = true"
      (mouseout)="streamBoxHovered = false"
    >
      <img
        class="thumbnail"
        [src]="thumbnail"
        [routerLink]="['/live', streamer]"
        routerLinkActive="active"
      />
      <div>
        <img
          class="profile-image"
          [src]="profilePic"
          [routerLink]="['/live', streamer]"
        />
      </div>
      <div class="stream-box-text">
        <h3 [routerLink]="['/live', streamer]">{{ streamName }}</h3>
        <h4 [routerLink]="['/live', streamer]">{{ streamer }}</h4>
        <h4
          [ngStyle]="{ 'text-decoration': 'underline', 'text-align': 'center' }"
          [routerLink]="['/browse', category]"
        >
          {{ category }}
        </h4>
      </div>
    </div>
  `,
  styleUrls: ['./stream-box.component.scss'],
})
export class StreamBoxComponent implements OnInit, IStreamBox {
  @Input() thumbnail!: string;
  @Input() profilePic!: string;
  @Input() streamName!: string;
  @Input() streamer!: string;
  @Input() category!: string;
  streamBoxHovered: boolean = false;
  constructor(private sps: StreamBoxParserService) { }

  ngOnInit(): void {
    this.sps.getStreamInfo();
  }
}
