import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { LeadersLayoutComponent } from './leaders/leaders-layout.component';
import { IssuesLayoutComponent } from './issues/issues-layout.component';
import { CategoriesComponent } from './issues/components/categories/categories.component';
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
        component:LeadersLayoutComponent
    },
    {
        path:'influencers',
        component:HomeLayoutComponent
    },
    {
        path:'issues',
        loadChildren:"app/issues/issues.module#IssuesModule",
    
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
  