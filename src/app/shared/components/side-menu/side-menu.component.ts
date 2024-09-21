import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  menus: {
    name: string;
    icon: string;
    modules: [{ name: string; icon: string; path: string }];
  }[] = [
      {
        name: 'Configuración',
        icon: 'fas fa-cog',
        modules: [{ name: 'Dashboard', icon: 'fas fa-border-all', path: '/' }],
      },
      {
        name: 'Administración',
        icon: 'fas fa-users-cog',
        modules: [{ name: 'Listado de usuarios', icon: 'fas fa-users', path: 'administration/users' }],
      },
      {
        name: 'Operación',
        icon: 'fas fa-briefcase',
        modules: [
          { name: 'Permissions', icon: 'fas fa-user-lock', path: '/permissions' },
        ],
      },
    ];

  constructor() { }

}

