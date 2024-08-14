import { Component } from '@angular/core';
import { AffichageService } from '../services/affichage.service';
import {Album} from '../album'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
albums?:Album[];
album?:Album;
  constructor(private service:AffichageService){}

 ngOnInit():void{

  this.albums = this.service.affichAlbum()
 }

 getDetail(album:Album){
this.album = album;

 }
 getSearch(e:string){
  
  if(e.trim()!==""){
    this.albums=this.albums?.filter((el)=>{
      return el.title.toLowerCase().includes(e.toLowerCase())
        })
  }
  else{
    this.albums = this.service.affichAlbum()
  }
 }
 
}
