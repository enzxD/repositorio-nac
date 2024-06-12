import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from '../interfaces/producto';
import { CurrencyPipe, SlicePipe } from '@angular/common';
@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {

  private _router = inject(Router)
  
  @Input() producto?: Productos;

  verMas(id?: number)
  {
    this._router.navigate(['/productos', id]);
  }
}
