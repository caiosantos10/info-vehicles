import { Routes } from '@angular/router';
import { VehiclesListComponent } from './features/vehicles/components/vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './features/vehicles/components/vehicles-form/vehicles-form.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: 'vehicles', children: [
            { path: 'list', component: VehiclesListComponent },
            { path: 'register-vehicle', component: VehiclesFormComponent },
            { path: 'edit-vehicle', component: VehiclesFormComponent },
            { path: '', redirectTo: 'list', pathMatch: 'prefix' },
        ]
    },
    { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];
