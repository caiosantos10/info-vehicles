import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-form',
  standalone: true,
  imports: [HttpClientModule],
  providers: [VehiclesService],
  templateUrl: './vehicles-form.component.html',
  styleUrl: './vehicles-form.component.scss'
})
export class VehiclesFormComponent {

}
