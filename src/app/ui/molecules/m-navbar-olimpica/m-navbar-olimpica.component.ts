import { Component } from '@angular/core';
import { ALogoComponent } from "../../atoms/a-logo/a-logo.component";
import { ASeparatorComponent } from "../../atoms/a-separator/a-separator.component";

@Component({
  selector: 'm-navbar-olimpica',
  standalone: true,
  imports: [ALogoComponent, ASeparatorComponent],
  templateUrl: './m-navbar-olimpica.component.html',
  styleUrl: './m-navbar-olimpica.component.scss'
})
export class MNavbarOlimpicaComponent {

}
