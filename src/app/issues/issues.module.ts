import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesLayoutComponent } from './issues-layout.component';
import { IssuesSubHeaderComponent } from './components/issues-sub-header/issues-sub-header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IssuesLayoutComponent, IssuesSubHeaderComponent, CategoriesComponent, CategoryCardComponent]
})
export class IssuesModule { }
