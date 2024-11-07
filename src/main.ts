import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { CoffeeListComponent } from './app/coffee-list/coffee-list.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/coffee', pathMatch: 'full' }, //default route
  { path: 'coffee', component: CoffeeListComponent },
  { path: 'modify-coffee', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }, //Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).then((r) => console.log('Bootstrap successful'));
