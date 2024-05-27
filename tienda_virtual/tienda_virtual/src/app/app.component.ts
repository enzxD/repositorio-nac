import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CabezaComponent } from "./cabeza/cabeza.component";
import { ProductosComponent } from "./productos/productos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, CabezaComponent, ProductosComponent]
})
export class AppComponent {
  title = 'tienda_virtual';
}
