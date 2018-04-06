import { AppModule } from './../app.module';
import { CreateIssueComponent } from '../core/create-issue/create-issue.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesLayoutComponent } from './issues-layout.component';
import { IssuesSubHeaderComponent } from './components/issues-sub-header/issues-sub-header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { RouterModule } from '@angular/router';
import { MyIssuesComponent } from './components/my-issues/my-issues.component';
import { TrendingComponent } from './components/trending/trending.component';
import { IssuesSidebarComponent } from './components/issues-sidebar/issues-sidebar.component';
import { HomeModule } from '../home/home.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';





@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild([
      {path:'',component:IssuesLayoutComponent,
    children:[
      {path:'',component:CategoriesComponent},
      {path:'trending',component:TrendingComponent},
      {path:'my-issues',component:MyIssuesComponent},
    ]},
     
    ]),
  ],
  declarations: [
      IssuesLayoutComponent,
      IssuesSubHeaderComponent, 
      CategoriesComponent,
      CategoryCardComponent, 
      TrendingComponent, 
      MyIssuesComponent, 
      IssuesSidebarComponent,
  
    ]
})
export class IssuesModule { }
