import { Component, OnInit, Input } from '@angular/core';
import {Chart,StockChart} from 'angular-highcharts';

@Component({
  selector: 'statistics-container',
  templateUrl: './statistics-container.component.html',
  styleUrls: ['./statistics-container.component.scss']
})
export class StatisticsContainerComponent{
  
  chart = new Chart({
    chart: {
      type: 'line',
       style: {
            fontFamily: 'serif'
        },
    },
    
    title: {
      text: null
    },
    xAxis: {
      labels: {
        enabled:false 
      },
      title: {
          text: null
      },
    
  },
 yAxis: {
      labels: {
        enabled:false 
      },
      title: {
          text: null
      },
    
  },
  credits:{
    enabled:false
  },
    series: [{
      name: 'AAP',
      data: [4, 5, 4,5,4,5,7]
    },
    {
      name: 'Others',
      data: [1,2,1,2,1,2,1]
    },
    {
      name: 'SAD',
      data: [2,3,2,3,2,3,2]
    },
    {
      name: 'INC',
      data: [2,3,5,2,5,6,7]
    }
  ],
  plotOptions: {
    line: {
        marker: {
            enabled: false
        }
    }
}
  });
  @Input('progressBox') progressBox=false;
  @Input('graphBox') graphBox=false;
  @Input('map') mapBox=false;
 


}
