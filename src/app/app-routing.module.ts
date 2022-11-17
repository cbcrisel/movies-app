import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'movie/:id',
    component:MovieComponent
  },
  {
    path:'search/:id',
    component:SearchComponent
  },
  { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  {
    path:'**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
