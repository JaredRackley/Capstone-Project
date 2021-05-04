import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'category-box',
  template: `
    <div class="category-container">
      <img
        class="profile-image"
        [src]="categoryImage"
        (click)="filter(categoryName)"
      />
      <h4>&nbsp;&nbsp;{{ categoryName }}</h4>
      <div class="tags">
        <button badge="5" *ngFor="let tag of tags" mat-raised-button color="secondary">
          {{ tag }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./category-box.component.scss'],
})
export class CategoryBoxComponent implements OnInit {
  constructor() { }

  @Input() categoryImage!: string;
  @Input() categoryName: string | undefined;
  @Input() tags: string[] | undefined;
  @Input() filter!: Function

  ngOnInit(): void { }
}
