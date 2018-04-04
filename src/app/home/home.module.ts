import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { HomeSubHeaderComponent } from './components/home-sub-header/home-sub-header.component';
import { PartyPanelComponent } from './components/party-panel/party-panel.component';
import { StatisticsContainerComponent } from './components/statistics-container/statistics-container.component';
import { PopularTweetComponent } from './components/popular-tweet/popular-tweet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeLayoutComponent, HomeSubHeaderComponent, PartyPanelComponent, StatisticsContainerComponent, PopularTweetComponent]
})
export class HomeModule { }
