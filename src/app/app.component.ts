import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = "";
  isNotEmpty:boolean = false;

  isBtnAvailable(){
    if(this.username.length > 0){
      this.isNotEmpty = true;
    }else{
      this.isNotEmpty = false;
    }
  }

  resetUsername(){
    this.username = "";
    this.isNotEmpty = false;
  }



}
