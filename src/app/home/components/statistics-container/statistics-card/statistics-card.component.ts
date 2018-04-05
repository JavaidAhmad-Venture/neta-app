import { Component, OnInit, Input } from '@angular/core';
import { MapChart } from 'angular-highcharts';
@Component({
  selector: 'statistics-card',
 // templateUrl: './statistics-card.component.html',
  template: `
    <div [chart]="mapChart"></div>
  `,
  styleUrls: ['./statistics-card.component.scss']
})
 
export class StatisticsCardComponent implements OnInit {
@Input("imgUrl") imgUrl;
@Input("cardTitle") title;
@Input("progressPrecent") progressPercent;
@Input("partyColor") partColor;
 mapChart:MapChart;
  constructor() { }

  ngOnInit() {
  

  }

}
