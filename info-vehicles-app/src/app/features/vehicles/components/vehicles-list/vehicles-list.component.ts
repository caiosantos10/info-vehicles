import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';
import { Subscription, tap } from 'rxjs';
import { Vehicle } from '../../interfaces/vehicle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  providers: [VehiclesService],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent implements OnInit {
  @ViewChild('actionsCol') actionsCol!: ElementRef;

  vehicles!: Vehicle[];
  private subscription!: Subscription;

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getVehicles(): void {
    this.subscription = this.vehiclesService
      .getVehicles()
      .pipe(tap(vehicle => vehicle.map(item => item = { ...item, showActions: false })))
      .subscribe(vehicles => this.vehicles = vehicles);
  }

  deleteVehicle(): void {

  }

  clickActionsMenu(item: Vehicle) {
    item.showActions = !item.showActions;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.actionsCol?.nativeElement?.contains(event.target)) {
      this.vehicles?.map(vehicle => vehicle.showActions = false);
    }
  }
}
