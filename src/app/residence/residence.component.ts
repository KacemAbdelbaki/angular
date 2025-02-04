import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  searche!: string;
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria","image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine","address":"Ezzahra","image":"../../assets/images/R1.jpg", status:"Disponible" },
    {id:3,"name": "El Arij","address":"Rades","image":"../../assets/images/R1.jpg", status:"Vendu"},
    {id:4,"name": "El Anber","address":"inconnu","image":"../../assets/images/R1.jpg", status: "En Construction"}
    ];

  tableItem = "";
  showLocation(res:Residence){
    if(res.address == "inconnu")
      alert("Adresse inconnue");
    else
      alert("Adresse: "+res.address);
  }

  cardSearch = ""
  filterResidences() {
    return this.listResidences.filter(residence =>
      residence.name.toLowerCase().includes(this.cardSearch.toLowerCase())
    );
  }

  likedList: Residence[] = []
  addLike(res:Residence){
    if(this.likedList.includes(res)){
      this.likedList.splice(this.likedList.indexOf(res), 1);
    }else{
      this.likedList.push(res);
    }
  }

  isLiked(res:Residence){
    if(this.likedList.includes(res)){
      return false;
    } else {
      return true;
    }
  }
}
