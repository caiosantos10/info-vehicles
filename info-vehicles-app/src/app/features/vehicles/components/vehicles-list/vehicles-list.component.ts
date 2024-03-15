import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Vehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers: [VehiclesService],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent implements OnInit{
  $vehicles!: Observable<Vehicle[]>;

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.$vehicles = this.vehiclesService.getVehicles();
  }
}
