import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RegisterActorsComponent } from './register-actors.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [RegisterActorsComponent],
  imports: [
    CommonModule,
    FloatLabelModule,
    CardModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [RegisterActorsComponent],
})
export class RegisterActorsModule {}
