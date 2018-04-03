import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'statistics-container',
  templateUrl: './statistics-container.component.html',
  styleUrls: ['./statistics-container.component.scss']
})
export class StatisticsContainerComponent implements OnInit {
  @Input('progressBox') progressBox=false;
  @Input('graphBox') graphBox=false;
  @Input('map') mapBox=false;
  constructor() { }

  ngOnInit() {
  }

}
