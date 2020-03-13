import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoginPageService} from './login-page/login-page.service';
import {HttpClientModule} from '@angular/common/http';
import {MoviesComponent} from './movies/movies.component';
import {HeaderComponent} from './header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import {MoviesService} from './movies/movies.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MenuMoviesComponent } from './movies/menu-movies/menu-movies.component';
import { AddMovieModalComponent } from './movies/add-movie-modal/add-movie-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MoviesComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MenuMoviesComponent,
    AddMovieModalComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule
  ],
  exports: [
    FormsModule
  ],
  providers: [LoginPageService , MoviesService],
  entryComponents: [AddMovieModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
