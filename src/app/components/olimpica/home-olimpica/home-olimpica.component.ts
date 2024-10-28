import { Component } from '@angular/core';
import { MNavbarOlimpicaComponent } from "../../../ui/molecules/m-navbar-olimpica/m-navbar-olimpica.component";
import { HeaderOlimpicaComponent } from "../header-olimpica/header-olimpica.component";

@Component({
  selector: 'app-home-olimpica',
  standalone: true,
  imports: [HeaderOlimpicaComponent, MNavbarOlimpicaComponent],
  templateUrl: './home-olimpica.component.html',
  styleUrl: './home-olimpica.component.scss'
})
export class HomeOlimpicaComponent {

}
