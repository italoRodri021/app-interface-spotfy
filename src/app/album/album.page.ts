import { GetServerDataService } from './../services/get-server-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {

  data: any;
  backgroundColor: string;
  listMusics = [
    {title: 'Ela gosta de gasolina', titleAlbum: 'Amplificado'},
    {title: 'Volta pra mim', titleAlbum: 'Amplificado'},
    {title: 'Eu só quero vc', titleAlbum: 'Amplificado'},
    {title: 'Minha amada', titleAlbum: 'Amplificado'},
    {title: 'Eu só quero um xodó', titleAlbum: 'Amplificado'},
    {title: 'Ela gosta de gasolina', titleAlbum: 'Amplificado'},
    {title: 'Volta pra mim', titleAlbum: 'Amplificado'},
    {title: 'Eu só quero vc', titleAlbum: 'Amplificado'},
    {title: 'Minha amada', titleAlbum: 'Amplificado'},
    {title: 'Ela gosta de gasolina', titleAlbum: 'Amplificado'},
    {title: 'Volta pra mim', titleAlbum: 'Amplificado'},
    {title: 'Eu só quero vc', titleAlbum: 'Amplificado'},
    {title: 'Minha amada', titleAlbum: 'Amplificado'},
  
  ]

  constructor(
    private getServerDataService: GetServerDataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.generateBackgroundColor();
  }

  ngOnInit() {
    
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
    this.data = this.getServerDataService.dataAlbum;
    
  }

  ionViewDidEnter() {
   
  }

  generateBackgroundColor(){

   this.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(this.backgroundColor)
  }  

}
