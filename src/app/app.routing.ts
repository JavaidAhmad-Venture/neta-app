import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeLayoutComponent } from './home/components/home-layout/home-layout.component';
export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
        path:'home',
        component:HomeLayoutComponent
     },
    {
        path:'leaders',
        component:HomeLayoutComponent
    },
    {
        path:'influencers',
        component:HomeLayoutComponent
    },
    {
        path:'Issues',
        component:HomeLayoutComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }

  
    
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  