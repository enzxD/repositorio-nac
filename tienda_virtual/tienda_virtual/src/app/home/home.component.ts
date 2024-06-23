import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initializeCarousel();
  }

  initializeCarousel(): void {
    const grande = document.querySelector('.grande') as HTMLElement;
    const punto = document.querySelectorAll('.punto') as NodeListOf<HTMLElement>;

    punto.forEach((_cadaPunto, i) => {
      punto[i].addEventListener('click', () => {
        const posicion = i;
        const operacion = posicion * -30;

        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach((_cadaPunto, i) => {
          punto[i].classList.remove('activo');
        });
        punto[i].classList.add('activo');
      });
    });
  }
}