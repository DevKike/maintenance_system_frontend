import { Component } from '@angular/core';

interface Document {
  name: string;
}

interface Role {
  role: string;
}
interface State {
  status: string;
}
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

  documents!: Document[];
  selectedDocuments!: Document[];

  roles!: Role[];
  selectedRoles!: Role[];

  status!: State[]
  selectedStatus!: State[];

  ngOnInit() {
    this.documents = [
      { name: 'Cédula de ciudadanía' },
      { name: 'Cédula de extranjería' },
      { name: 'Pasaporte' },
      { name: 'Registro civil' },
    ];

    this.roles = [
      { role: 'System Assitant' },
      { role: 'System Auxiliary' },
    ];

    this.status = [
      { status: 'Active' },
      { status: 'Inactive' },
      { status: 'Suspended' },
    ];
  }
}
