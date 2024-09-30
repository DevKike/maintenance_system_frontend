import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-primeng-sidebar',
  templateUrl: './primeng-sidebar.component.html',
  styleUrls: ['./primeng-sidebar.component.css']
})
export class PrimengSidebarComponent {

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  items!: MenuItem[];


  constructor(private router: Router) {}

  closeSidebar() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeSidebar();
  }

  ngOnInit() {
    this.items = [
        {
            label: 'Users',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Register',
                    icon: '',
                    items: [
                        {
                            label: 'Actors',
                            icon: 'pi pi-user-plus',
                            command: () => this.navigateTo('/register_actors')
                        },

                    ]
                },
                {
                    label: 'View Users',
                    items: [
                        {
                            label: 'All Users',
                            icon: 'pi pi-users',
                            command: () => this.navigateTo('/users')
                        }
                    ]
                }
            ]
        },
        {
            label: 'Cloud',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Upload',
                    icon: 'pi pi-cloud-upload'
                },
                {
                    label: 'Download',
                    icon: 'pi pi-cloud-download'
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-refresh'
                }
            ]
        },
        {
            label: 'Devices',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Phone',
                    icon: 'pi pi-mobile'
                },
                {
                    label: 'Desktop',
                    icon: 'pi pi-desktop'
                },
                {
                    label: 'Tablet',
                    icon: 'pi pi-tablet'
                }
            ]
        }
    ]
}
}
