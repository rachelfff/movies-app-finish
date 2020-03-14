import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';

const isLink = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i');

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.scss']
})
export class AddMovieModalComponent implements OnInit {
  @Input() allCategories = [];
  @Input() exitsMoviesName: string[];

  form: FormGroup;
  exitsName = false;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private http: HttpClient) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+')]],
      imdbLink: ['', [Validators.required, Validators.pattern(/http:\/\/(?:.*\.|.*)imdb.com\/(?:t|T)itle(?:\?|\/)(..\d+)/i)]],
      jpgLink: ['', Validators.required, Validators.pattern(isLink)],
      description: ['', Validators.required],
      rate: ['', Validators.required],
      length: ['', Validators.required],
      genres: ['', Validators.required]
    });
    this.form.get('name').valueChanges.subscribe(movieName => {
      this.exitsName = this.exitsMoviesName.indexOf(movieName) > 0 ? true : false;
      console.log(this.form.get('genres').value);
    });
  }

  checkValidForm() {
    if (this.form.valid && !this.exitsName) {
      const sendDate = this.form.value;
      sendDate['created'] = new Date().toDateString();
      sendDate['genres'] = [this.form.get('genres').value]; //TODO multi s
      console.log(new Date().toDateString());
      this.activeModal.close(sendDate);
    }
  }
}
