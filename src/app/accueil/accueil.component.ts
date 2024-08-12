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
  constructor(private service:AffichageService){}

 ngOnInit():void{

  this.albums = this.service.affichAlbum()
 }
}
