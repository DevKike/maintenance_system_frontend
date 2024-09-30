import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengSidebarComponent } from './primeng-sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [PrimengSidebarComponent],
  imports: [CommonModule, SidebarModule, AvatarModule,PanelMenuModule],
  exports: [PrimengSidebarComponent],
})
export class PrimengSidebarModule {}
