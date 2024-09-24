import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primeng-sidebar',
  templateUrl: './primeng-sidebar.component.html',
  styleUrl: './primeng-sidebar.component.css'
})
export class PrimengSidebarComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  closeSidebar() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
