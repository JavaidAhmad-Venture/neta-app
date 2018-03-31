import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'party-panel',
  templateUrl: './party-panel.component.html',
  styleUrls: ['./party-panel.component.scss']
})
export class PartyPanelComponent implements OnInit {
  @Input("partyName") partyName='';
  @Input("imageUrl") imageUrl='';
  constructor() { }

  ngOnInit() {
  }

}
