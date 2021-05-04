import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stream-preview',
  template: `
    <div *ngIf="!hidden" class="preview-container">
      <img class="recommended" [src]="uri" />
      <div [ngStyle]="{ 'font-size': '18px' }">{{ name }}</div>
      <div [ngStyle]="{ 'text-decoration': 'underline', cursor: 'pointer' }">
        {{ category }}
      </div>
      <div [ngStyle]="{ color: '#ae0000' }" *ngIf="live; else ElseBlock">
        <mat-icon class="live-icon">circle</mat-icon>
        <span>Live</span>
      </div>
      <ng-template #ElseBlock><div>Offline</div></ng-template>
    </div>
  `,
  styles: [
    `
      img {
        min-width: 48px;
        min-height: 48px;
        width: 48px;
        height: 48px;
        border-radius: 36px;
        margin-left: 8px;
        float: left;
        cursor: pointer;
      }
      div {
        text-align: center;
      }
      .preview-container {
        margin-bottom: 20px;
      }
      .live-icon {
        display: inline;
        position: relative;
        white-space: nowrap;
        font-size: 14px;
        top: 2px;
      }
    `,
  ],
})
export class StreamPreviewComponent implements OnInit {
  @Input() name!: string;
  @Input() uri!: string;
  @Input() category!: string;
  @Input() live?: boolean;
  @Input() hidden?: boolean;

  constructor() { }

  ngOnInit(): void { }
}
