import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  username: string | undefined;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => this.username = param.get("streamer") as string);
  }

  ngOnInit(): void {
  }

}
