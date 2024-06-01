import { Component } from '@angular/core';
import { TarjetasComponent } from "../tarjetas/tarjetas.component";
import { NgFor } from '@angular/common';






@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css'],
    imports: [TarjetasComponent, NgFor, ProductosComponent]
})
export class ProductosComponent {
  

 
  }

  

