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
import { filter, map } from 'rxjs';
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

  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        map((route) => route.url)
      )
      .subscribe(
        (item) => {
          item.subscribe((data) => {
            this.checkPath(data.join('/'));
          });
        },
        (error) => {
          console.error('App Error', error);
        }
      );
  }

  checkPath(path: string) {
    this.showTemplates = !EXCLUDED_PATH.includes(path);
  }
}
