import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() options!: any[];
  @Input() selectedOption!: any;
  @Input() optionLabel!: string;
  @Input() placeholder!: string;
}
