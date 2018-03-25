import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from 'ng2-redux';
import { TmoviesComponent } from './tmovies/tmovies.component';
import { MoviesService } from './tmovies/movies.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfigService } from './common-services/config.service';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [
    TmoviesComponent,
    NavbarComponent
  ],
  exports: [
    TmoviesComponent,
    NavbarComponent
  ],
  providers: [MoviesService, ConfigService],
})
export class MoviesModule { }
