import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import videojs from 'video.js';



@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html'
})
export class AudioPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() thumbnail: string = '../assets/image-not-available.jpg';
  @Input() url: string = 'http://184.72.103.90/test.m3u8';
  @Input() height: string = '800px';
  @Input() width: string = '1024px';
  public player!: videojs.Player;

  ngAfterViewInit() {
    console.debug(`this.thumbnail: ${this.thumbnail}`);
    const options = {
      'sources': [{
        'src': this.url,
        'type': 'application/x-mpegURL',
      }
      ],
      'poster': this.thumbnail
    };
    this.player = videojs('my-video', options, function onPlayerReady(this: any) {
      console.log('Player ready');
      const myPlayer = this, id = myPlayer.id();
    });

  }

  ngOnDestroy(): void {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

}
