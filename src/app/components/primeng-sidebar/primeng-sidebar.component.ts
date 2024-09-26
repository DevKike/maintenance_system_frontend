import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeng-sidebar',
  templateUrl: './primeng-sidebar.component.html',
  styleUrl: './primeng-sidebar.component.css'
})
export class PrimengSidebarComponent {

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  closeSidebar() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeSidebar(); 
  }
}
