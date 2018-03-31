import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomeSubHeaderComponent } from './components/home-sub-header/home-sub-header.component';
import { PartyPanelComponent } from './components/party-panel/party-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeLayoutComponent, HomeSubHeaderComponent, PartyPanelComponent]
})
export class HomeModule { }
