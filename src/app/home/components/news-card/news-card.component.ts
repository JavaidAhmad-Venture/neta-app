import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input('firstCard') firstCard = false;
  @Input('secondCard') secondCard = false;
  @Input('thirdCard') thirdCard = false;
  constructor() { }

  ngOnInit() {
  }

}
