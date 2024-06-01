import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {
  producto = {
    titulo: 'Maaquina de Afeitar',
    descripcion: 're mil re sacada',
    precio: 99.99 + 'Dolares'
  };
}
