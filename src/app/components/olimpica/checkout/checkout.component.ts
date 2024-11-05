import { Component } from '@angular/core';
import { AButtonComponent } from "../../../ui/atoms/a-button/a-button.component";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [AButtonComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
