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
      background: 'images/olimpica/first-image.webp',
      title: "Pa'lante Colombia",
      subtitle: 'La educación es la herencia más valiosa',
      buttonText: '¡Donemos Juntos!'
    },
    {
      background: 'images/olimpica/second-image.webp',
      title: 'Otro Slide',
      subtitle: 'Descripción del segundo slide',
      buttonText: 'Más Información'
    },

  ];



  currentSlide = 0;
  transitionStyle = 'transform 0.5s ease';

  getTransformStyle() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  nextSlide() {
    if (this.currentSlide < this.carouselItems.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; 
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.carouselItems.length - 1;
    }
  }
}
