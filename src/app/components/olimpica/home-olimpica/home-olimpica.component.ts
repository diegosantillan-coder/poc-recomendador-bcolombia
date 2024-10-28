import { Component } from '@angular/core';
import { ACardLocationComponent } from "../../../ui/atoms/a-card-location/a-card-location.component";
import { ALogoComponent } from "../../../ui/atoms/a-logo/a-logo.component";
import { MNavbarOlimpicaComponent } from "../../../ui/molecules/m-navbar-olimpica/m-navbar-olimpica.component";
import { HeaderOlimpicaComponent } from "../header-olimpica/header-olimpica.component";

@Component({
  selector: 'app-home-olimpica',
  standalone: true,
  imports: [HeaderOlimpicaComponent, MNavbarOlimpicaComponent, ACardLocationComponent, ALogoComponent],
  templateUrl: './home-olimpica.component.html',
  styleUrl: './home-olimpica.component.scss'
})
export class HomeOlimpicaComponent {

}
