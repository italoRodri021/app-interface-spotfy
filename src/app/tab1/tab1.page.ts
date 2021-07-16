import { GetServerDataService } from './../services/get-server-data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listCategory = [
    {
      title: 'Artistas',
      album: 'Wesley Safadão',
    },
    {
      title: 'Artistas em destaque',
      album: 'Wesley Safadão',
 
    },
    {
      title: 'As melhores playlists',
      album: 'Wesley Safadão',
    }
  ]

  public listAlbums = [
    {id: 1, image: "assets/images/album.jpg", title: "Wesley Safadão"},
    {id: 2, image: "assets/images/album.jpg", title: "Xand Avião"},
    {id: 3, image: "assets/images/album.jpg", title: "Rai Saia Rodada"},
    {id: 4, image: "assets/images/album.jpg", title: "Bruno e Marrone"},
    {id: 5, image: "assets/images/album.jpg", title: "Forro das Antigas"},
    {id: 6, image: "assets/images/album.jpg", title: "Dorgival Dantas"},
    {id: 7, image: "assets/images/album.jpg", title: "Marilia Mendoça"},
    {id: 8, image: "assets/images/album.jpg", title: "Luam Santana"},
    {id: 9, image: "assets/images/album.jpg", title: "Cesar MC"},
    {id: 10, image: "assets/images/album.jpg", title: "Anitta"},
  ];
  public slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 10,
    slidesPerView: 2.5,
    freeMode: true,
  };

  constructor(
    private router: Router,
    private getServerDataService: GetServerDataService
  ) {}


  public openAlbum(album){

    const titleEscaped = encodeURIComponent(album.title);
    this.getServerDataService.dataAlbum = album;
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);

  }
}
