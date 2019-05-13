import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  imageURL: string;

  constructor(public http: Http) { }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.target.files;
    console.log(files);

    const data = new FormData();
    data.append('file', files[0]);
    data.append('UPLOADCARE_STORE', '1');
    data.append('UPLOADCARE_PUB_KEY', '8aaa236d64b5e59f6712');

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(fl => {
      console.log(fl);
      this.imageURL = fl.json().file;
    });
  }

}
