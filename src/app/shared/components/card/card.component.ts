import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() header!: string;
  @Input() subheader!: string;
  @Input() imageUrl!: string;
  @Input() content!: string;
}
