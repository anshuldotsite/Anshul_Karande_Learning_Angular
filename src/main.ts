import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { CoffeeListComponent } from './app/coffee-list/coffee-list.component';
import { CoffeeListItemComponent } from './app/coffee-list-item/coffee-list-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/coffee', pathMatch: 'full' }, //default route
  { path: 'coffee', component: CoffeeListComponent },
  { path: 'coffee/:id', component: CoffeeListItemComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).then((r) => console.log('Bootstrap successful'));
