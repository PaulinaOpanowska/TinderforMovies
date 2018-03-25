import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';
import { RELOAD } from '../actions';
import { ConfigService } from '../common-services/config.service';

@Injectable()
export class MoviesService {
  private acceptUrl: string;
  private rejectUrl: string;

  constructor(private ngRedux: NgRedux<IAppState>, private http: Http, private config: ConfigService) {
    this.acceptUrl = config.getBackendUrl('accept');
    this.rejectUrl = config.getBackendUrl('reject');
  }

  loadMovies(){
    this.ngRedux.dispatch({ type: RELOAD, data: [
      {id:​ ​'1and3011', imageURL:'https://igmedia.blob.core.windows.net/igmedia/tamil/gallery/movies/inferno/main.jpg', title:​ 'Inferno', summary:​ ​'Lorem​ ​ipsum….',  rating:​ ​5.3},​ 
      ​{id:​ ​'2301abc',  imageURL: 'https://muropaketti.com/wp-content/uploads/2017/09/star-wars-logo.jpg',  title:​ ​'Star​ ​Wars:​ ​Episode​ ​VII​ ​-​ ​The​ ​Force​ ​Awakens​',  summary:​ ​'Lorem​ ​ipsum….',  rating:​ ​8.2}
    ]});
  }

  acceptMovie(id) {
    return this.http.put(this.acceptUrl.replace(/<id>/, id),null).subscribe(
      () => {

      },
      err => {
        
      })
  }

  rejectMovie(id) {
    return this.http.put(this.rejectUrl.replace(/<id>/, id), null).subscribe(
      () => {

      },
      err => {

      })
  }
}