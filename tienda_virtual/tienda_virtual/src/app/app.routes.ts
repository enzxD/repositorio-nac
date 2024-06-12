import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { DetallesComponent } from './detalles/detalles.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos/:productosId', component: DetallesComponent},
    { path: '**', redirectTo:''},
];
