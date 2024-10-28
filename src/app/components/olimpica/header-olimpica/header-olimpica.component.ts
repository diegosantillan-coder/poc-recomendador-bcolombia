import { Component } from '@angular/core';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { OrganismsModule } from '@ui/organisms/organisms.module';
import { ASeparatorComponent } from "../../../ui/atoms/a-separator/a-separator.component";

@Component({
  selector: 'app-header-olimpica',
  standalone: true,
	imports: [OrganismsModule, AtomsModule, ASeparatorComponent],
  templateUrl: './header-olimpica.component.html',
  styleUrl: './header-olimpica.component.scss'
})
export class HeaderOlimpicaComponent {

}
