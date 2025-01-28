import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //interpolation
  name="Kacem";

  //property binding 
  status=false;

  // event binding
  add(){
    console.log("hello arctic8");
  }
}
