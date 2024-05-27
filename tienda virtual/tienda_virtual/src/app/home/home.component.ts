import { Component, OnInit } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { productos } from '../interfaces/productos'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent  {
  ngOnInit(): void {
  
  }
  _productos: productos | undefined
  

  usuario:string = 'sacado'
  apellido:string='tu madre'
  card = {
    marca: 'nissan',
    modelo: '2010',
    ano: '5 ac',
    imagen: ''
  }
  texto: string = 'aca pone algo pajero'
  alertText(){
    alert(this.texto)
  }
}

