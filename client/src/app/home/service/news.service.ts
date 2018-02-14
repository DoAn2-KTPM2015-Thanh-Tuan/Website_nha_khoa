import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from './AppSettings';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class NewsService{
    constructor(private http: Http){}

    getListNews(){
        return this.http.get(AppSettings.API_ENDPOINT + '/home/list-news/get-list-news.php')
        .toPromise()
        .then(res => res.json())
        .catch(err => err)
    }
}