import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [
    {
      title: 'Amor Bandido',
      album: 'Wesley Safadão',
      img: 'assets/images/album.jpg'
    }
  ]

  constructor() {}

}
