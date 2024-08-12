import { Injectable } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mocks-albums';

@Injectable({
  providedIn: 'root'
})
export class AffichageService {

album?:Album[]=ALBUMS;

constructor(){}

affichAlbum(){
  return this.album;
}
}
