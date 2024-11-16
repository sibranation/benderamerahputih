import { Component } from '@angular/core';
import { ONLINE_STORES } from './online-store.constant';
import { CommonModule } from '@angular/common';
import type { OnlineStore } from './online-store.model';

@Component({
  selector: 'app-online-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './online-store.component.html',
  styleUrl: './online-store.component.scss'
})
export class OnlineStoreComponent {
  onlineStores = ONLINE_STORES;

  handleStoreClick(item: OnlineStore) {
    window.open(item.link, '_blank');
  }
}
