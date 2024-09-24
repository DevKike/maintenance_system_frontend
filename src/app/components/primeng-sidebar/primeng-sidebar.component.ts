import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primeng-sidebar',
  templateUrl: './primeng-sidebar.component.html',
  styleUrl: './primeng-sidebar.component.css'
})
export class PrimengSidebarComponent {
  @Input() visible: boolean = false;
}
