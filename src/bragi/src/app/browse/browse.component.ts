import { Component, OnInit } from '@angular/core';
import { DataParserService } from '../services/data-parser/data-parser.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  public categories: string[] = [];
  streams: Array<{ username: string, viewerCount: number, streamName: string, category: string, thumbnail: string, profilePic: string }> = [];
  streamsFiltered: Array<{ username: string, viewerCount: number, streamName: string, category: string, thumbnail: string, profilePic: string }> = [];
  category?: string;

  constructor(public dataParser: DataParserService, private router: Router) {
    this.streams = dataParser.getLiveStreams();


  }

  ngOnInit(): void {
    this.dataParser.getCategories().subscribe(c => {
      this.categories = [];
      this.categories.push(...c);
    });
  }

  filter = (categoryName: string) => {
    categoryName = categoryName.toLowerCase();
    console.log(categoryName)
    this.category = categoryName;

    this.streamsFiltered = this.streams.filter(stream => stream.category === categoryName);
    console.log(this.streamsFiltered)
    this.router.navigate(['/browse', categoryName], { skipLocationChange: true })
  }

  sort() {
    return this.streamsFiltered.sort((a, b) => b.viewerCount - a.viewerCount);
  }

}
