import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primeng-toolbar',
  templateUrl: './primeng-toolbar.component.html',
  styleUrl: './primeng-toolbar.component.css'
})
export class PrimengToolbarComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }
}
