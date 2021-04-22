import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full',
      },
      {
        path: 'home', 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      { path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      },
      { path: 'movie',
        loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
      },
      /* 
      { path: 'search/:texto', component: SearchComponent }, 
      { path: 'movie/:id/:pag', component: MovieComponent },
      { path: 'movie/:id/:pag/:search', component: MovieComponent },
      */
      { path: '', pathMatch:'full', redirectTo: 'home'},
      { path: '**', pathMatch:'full', redirectTo: 'home'}
    ]
  }

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
