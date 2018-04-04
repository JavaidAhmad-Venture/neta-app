import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTweetComponent } from './popular-tweet.component';

describe('PopularTweetComponent', () => {
  let component: PopularTweetComponent;
  let fixture: ComponentFixture<PopularTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
