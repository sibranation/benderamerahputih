import { Component } from '@angular/core';
import { WA_URL } from './whatsapp.constant';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent {
  WA_URL = WA_URL;
}
