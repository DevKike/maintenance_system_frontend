import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { PrimengSidebarComponent } from './components/primeng-sidebar/primeng-sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RegisterActorsComponent } from '../pages/register-actors/register-actors.component';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    PrimengSidebarComponent,
    RegisterActorsComponent,
    CardComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    PanelMenuModule,
    FloatLabelModule,
    CardModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
  ],

  exports: [DashboardComponent, HeaderComponent, PrimengSidebarComponent],
})
export class SharedModule {}
