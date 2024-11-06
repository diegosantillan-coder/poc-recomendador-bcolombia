import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'o-carousel-olimpica',
  standalone: true,
  imports: [CarouselModule,NgStyle],
  templateUrl: './o-carousel-olimpica.component.html',
  styleUrl: './o-carousel-olimpica.component.scss'
})
export class OCarouselOlimpicaComponent {
  carouselItems = [
    {
      background: 'images/olimpica/second-image.webp',
      title: 'Otro Slide',
      subtitle: 'Descripción del segundo slide',
      buttonText: 'Más Información'
    },
    {
      background: 'images/olimpica/third-image.webp',
      title: 'Otro Slide',
      subtitle: 'Descripción del segundo slide',
      buttonText: 'Más Información'
    },
    {
      background: 'images/olimpica/fourth-image.webp',
      title: 'Otro Slide',
      subtitle: 'Descripción del segundo slide',
      buttonText: 'Más Información'
    },
    {
      background: 'images/olimpica/fifth-image.webp',
      title: 'Otro Slide',
      subtitle: 'Descripción del segundo slide',
      buttonText: 'Más Información'
    },
    {
      background: 'images/olimpica/sixth-image.webp',
      title: 'Otro Slide',
      subtitle: 'Descripción del segundo slide',
      buttonText: 'Más Información'
    },
    {
      background: 'images/olimpica/seventh-image.webp',
      title: 'Otro Slide',
      subtitle: 'Descripción del segundo slide',
      buttonText: 'Más Información'
    },
    {
      background: 'images/olimpica/eighth-image.webp',
      title: 'Otro Slide',
      subtitle: 'Descripción del segundo slide',
      buttonText: 'Más Información'
    },
  ];

  duplicatedCarouselItems = [
    this.carouselItems[this.carouselItems.length - 1], // Último item como primero (duplicado)
    ...this.carouselItems,
    this.carouselItems[0] // Primer item como último (duplicado)
  ];
  currentSlide = 1; // Comienza en el primer slide real
  transitionStyle = 'transform 0.5s ease';
  isTransitioning = false;

  constructor() {
    setInterval(() => this.nextSlide(), 3000); // Cambio automático cada 3 segundos
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.currentSlide++;

    if (this.currentSlide >= this.duplicatedCarouselItems.length - 1) {
      this.isTransitioning = true;
      this.transitionStyle = 'transform 0.5s ease';
      setTimeout(() => {
        this.transitionStyle = 'none';
        this.currentSlide = 1; // Rebobina al primer slide real
        setTimeout(() => {
          this.transitionStyle = 'transform 0.5s ease';
          this.isTransitioning = false;
        }, 50);
      }, 500);
    }
  }

  prevSlide() {
    if (this.isTransitioning) return;
    this.currentSlide--;

    if (this.currentSlide <= 0) {
      this.isTransitioning = true;
      this.transitionStyle = 'transform 0.5s ease';
      setTimeout(() => {
        this.transitionStyle = 'none';
        this.currentSlide = this.carouselItems.length; // Rebobina al último slide real
        setTimeout(() => {
          this.transitionStyle = 'transform 0.5s ease';
          this.isTransitioning = false;
        }, 50);
      }, 500);
    }
  }

  getTransformStyle() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  goToSlide(index: number) {
    if (this.isTransitioning) return;
    this.currentSlide = index + 1;
  }
}
