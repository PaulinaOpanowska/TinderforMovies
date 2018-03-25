import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { ACCEPT_MOVIE, REJECT_MOVIE, RELOAD } from '../actions'; 
import { MoviesService } from './movies.service';
import { IAppState } from '../store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-tmovies',
  templateUrl: './tmovies.component.html',
  styleUrls: ['./tmovies.component.scss']
})
export class TmoviesComponent implements OnInit {

  @select() movies;
  @select() index;
  
  constructor(private ngRedux: NgRedux<IAppState>, private service: MoviesService) {
  }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.service.loadMovies();
  }

  accept() {
    this.service.acceptMovie(this.ngRedux.getState().movies[this.ngRedux.getState().index].id);
    this.ngRedux.dispatch({ type: ACCEPT_MOVIE});
    
  }

  reject(){
    this.service.rejectMovie(this.ngRedux.getState().movies[this.ngRedux.getState().index].id);
    this.ngRedux.dispatch({ type: REJECT_MOVIE});
  }

  swipe() {
    this.reject();
  }
}
