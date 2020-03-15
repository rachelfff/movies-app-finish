import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './movies.component';
import {MoviesService} from './movies.service';
import {MenuMoviesComponent} from './menu-movies/menu-movies.component';
import {AddMovieModalComponent} from './add-movie-modal/add-movie-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardMovieComponent} from './card-movie/card-movie.component';
import {MultiSelectCategoriesComponent} from './add-movie-modal/multi-select-categories/multi-select-categories.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
];


@NgModule({
  declarations: [
    MoviesComponent,
    MenuMoviesComponent,
    AddMovieModalComponent,
    CardMovieComponent,
    MultiSelectCategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
  providers: [
    MoviesService
  ],
  entryComponents: [AddMovieModalComponent],
})
export class MoviesModule { }
