import { Component } from '@angular/core';
import { StudioHeaderComponent } from './studio-header/studio-header.component';

@Component({
  selector: 'app-studio',
  standalone: true,
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.scss',
  imports: [StudioHeaderComponent]
})
export class StudioComponent {}
