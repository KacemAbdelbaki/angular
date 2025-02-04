import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  //hooks
  // starts by default on its own 1 time only
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //  other hooks


  // interpolation
  name="Kacem";

  //property binding 
  status=false;
  diabslebtn() {
    this.status=true;
  }

  // event binding
  add(){
    console.log("hello arctic8");
  }

  counter = 0;

  inc() {
    this.counter++;
  }

  // two way binding
  search="hello search";
}