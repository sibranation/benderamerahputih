import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatsappComponent } from './shared/whatsapp/whatsapp.component';
import { filter, map, Subscription } from 'rxjs';
import { EXCLUDED_PATH } from './app.constant';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    WhatsappComponent
  ]
})
export class AppComponent implements OnInit {
  showTemplates = true;
  private routerSubscription: Subscription = new Subscription();

  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
  ) {}

  ngOnInit() {
    //  this.routerSubscription = this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: NavigationEnd) => {
    //     this.showTemplates = !EXCLUDED_PATH.includes(event.urlAfterRedirects);
    //   });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  checkPath(path: string) {
    this.showTemplates = !EXCLUDED_PATH.includes(path);
  }
}
