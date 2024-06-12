import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductosService } from '../core/services/productos.service';
import { Productos } from '../interfaces/producto';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from "../tarjetas/tarjetas.component";





@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css'],
    imports: [CommonModule, TarjetasComponent]
})
export class ProductosComponent implements OnInit {

  productos: Productos[]=[];

  private _productoService = inject(ProductosService);
 

  ngOnInit(): void {
    this._productoService.getProduct().subscribe((data: Productos[])=>{
      this.productos = data;
    })
  }

}
  

