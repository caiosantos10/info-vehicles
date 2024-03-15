import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiclesListComponent } from './features/vehicles/components/vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './features/vehicles/components/vehicles-form/vehicles-form.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MenuItem } from './shared/components/sidebar/interfaces/MenuItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehiclesListComponent, VehiclesFormComponent, NotFoundPageComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuItems: MenuItem[] = [
    { path: '/vehicles/list', title: 'Vehicles List', isActive: false },
    { path: '/vehicles/register', title: 'Vehicles Register', isActive: false },
    { path: '/dashboard-para-ornamentar-menu', title: 'Dashboard', isActive: false },
    { path: '/orders-para-ornamentar-menu', title: 'Orders', isActive: false },
    { path: '/customers-para-ornamentar-menu', title: 'Customers', isActive: false },
  ]
}
