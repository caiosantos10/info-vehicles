import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../interfaces/vehicle';
import { Router, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { tap } from 'rxjs';
import { COLUMNS } from './utils/constants';
import { ModalConfirmComponent } from '../../../../shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule, TableComponent, ModalConfirmComponent],
  providers: [VehiclesService],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent implements OnInit {
  @ViewChild(ModalConfirmComponent) modalConfirmComponent!: ModalConfirmComponent;
  readonly attributes = COLUMNS;
  vehicles: Vehicle[] = [];
  isLoading = false;

  constructor(private vehiclesService: VehiclesService, private router: Router) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.isLoading = true;
    this.vehiclesService
      .getVehicles()
      .pipe(tap(vehicle => vehicle.map(item => item = { ...item, showActions: false })))
      .subscribe(vehicles => {
        this.vehicles = vehicles as Vehicle[]
        this.isLoading = false;
      });
  }

  deleteVehicle(id: string): void {
    this.modalConfirmComponent.openModal();    
  }

  editVehicle(id: string): void {
    this.router.navigateByUrl(`vehicles/edit/${id}`);
  }

  confirmAction = () => {
    // this.vehiclesService.deleteVehicle(id).subscribe();
    console.log('confirmado')
  };
}
