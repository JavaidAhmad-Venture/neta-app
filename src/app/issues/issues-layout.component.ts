import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'issues-layout',
  templateUrl: './issues-layout.component.html',
  styleUrls: ['./issues-layout.component.scss']
})
export class IssuesLayoutComponent implements OnInit {
    
    loadCategories:boolean = true;
    loadTrending:boolean;
    loadMyIssues:boolean;

   constructor(private router:Router) {
   
    if (router.url === '/issues/trending'){
      this.loadTrending = true;
      this.loadMyIssues = false;
      this.loadCategories = false;
    }
     
    if (router.url === '/issues/my-issues'){
      this.loadMyIssues = true;
      this.loadTrending = false;
      this.loadCategories = false;
    }
    else{
      this.loadCategories = true;
      this.loadMyIssues = false;
      this.loadTrending = false;
    } 



   }

  ngOnInit() {
  }

}
