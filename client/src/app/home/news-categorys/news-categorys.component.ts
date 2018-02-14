import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-categorys',
  templateUrl: './news-categorys.component.html',
  styleUrls: ['./news-categorys.component.css']
})
export class NewsCategorysComponent implements OnInit {
  public list_news;
  constructor(private newsService: NewsService) {
    this.newsService.getListNews()
    .then(list_news => {
      this.list_news = list_news;
      console.log(this.list_news[0]);
      this.list_news.shift();
      console.log(this.list_news)
    },
       err => console.log(err)
    ); 

  }
  
  ngOnInit() {
    console.log(this.list_news);
  }

}
