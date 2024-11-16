import { type Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { OnlineStoreComponent } from './modules/online-store/online-store.component';
import { PackageComponent } from './modules/package/package.component';
import { BooksComponent } from './modules/books/books.component';
import { StudioComponent } from './modules/studio/studio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'online-store', component: OnlineStoreComponent },
  { path: 'package', component: PackageComponent },
  { path: 'studio', component: StudioComponent }
];
