import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiclesListComponent } from './features/vehicles/components/vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './features/vehicles/components/vehicles-form/vehicles-form.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehiclesListComponent, VehiclesFormComponent, NotFoundPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'info-vehicles-app';
}
