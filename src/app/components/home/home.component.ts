import { Component, inject } from '@angular/core';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { ModalService } from '@core/services/modal/modal.service';
import { TemplatesModule } from '@ui/templates/templates.module';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [HeaderComponent, FooterComponent, TemplatesModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	private readonly isVisibleService = inject(ModalService);
	visible = this.isVisibleService.getModalStatus();
}
