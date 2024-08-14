import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-prin',
  templateUrl: './input-prin.component.html',
  styleUrl: './input-prin.component.css'
})
export class InputPrinComponent {
searche:string = "";

@Output()searchEvent= new EventEmitter<string>();

sendTest(){
  this.searchEvent.emit(this.searche)
  console.log(this.searche);
  
}


}
