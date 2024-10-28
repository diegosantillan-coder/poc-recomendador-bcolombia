import { Component } from '@angular/core';
import { HeaderOlimpicaComponent } from "../header-olimpica/header-olimpica.component";

@Component({
  selector: 'app-home-olimpica',
  standalone: true,
  imports: [HeaderOlimpicaComponent],
  templateUrl: './home-olimpica.component.html',
  styleUrl: './home-olimpica.component.scss'
})
export class HomeOlimpicaComponent {

}
