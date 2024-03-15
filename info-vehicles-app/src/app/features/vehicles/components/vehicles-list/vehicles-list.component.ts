import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [HttpClientModule,],
  providers: [VehiclesService],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent {

}
