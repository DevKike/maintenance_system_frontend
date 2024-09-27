import { Component } from '@angular/core';

@Component({
  selector: 'app-register-actors',
  templateUrl: './register-actors.component.html',
  styleUrl: './register-actors.component.css',
})
export class RegisterActorsComponent {
  value!: string;
  name!: string;
  lastName!: string;
  phone!: number;
  email!: string;
  document!: number;
  documentType!: string;
  status!: string;
  role!: string;
}
