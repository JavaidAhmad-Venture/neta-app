import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { HomeLayoutComponent } from './home-layout.component';
import { HomeSubHeaderComponent } from './components/home-sub-header/home-sub-header.component';
import { PartyPanelComponent } from './components/party-panel/party-panel.component';
import { StatisticsContainerComponent } from './components/statistics-container/statistics-container.component';
import { PopularTweetComponent } from './components/popular-tweet/popular-tweet.component';
import { SidebarHomeComponent } from '../core/sidebar-home/sidebar-home.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component';
import { StatisticsCardComponent } from './components/statistics-container/statistics-card/statistics-card.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
  ],
  declarations: [HomeLayoutComponent, 
    HomeSubHeaderComponent, 
    PartyPanelComponent, 
    StatisticsContainerComponent, 
    PopularTweetComponent,
    SidebarHomeComponent,
    TweetCardComponent,
    NewsContainerComponent,
    NewsCardComponent,
    ProfilePanelComponent,
    StatisticsCardComponent
  ],
})
export class HomeModule { }
