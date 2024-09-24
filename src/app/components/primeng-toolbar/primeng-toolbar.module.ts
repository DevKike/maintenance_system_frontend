import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengToolbarComponent } from './primeng-toolbar.component';
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PrimengToolbarComponent],
  imports: [CommonModule, ToolbarModule, ButtonModule],
  exports: [PrimengToolbarComponent],
})
export class PrimengToolbarModule {}
