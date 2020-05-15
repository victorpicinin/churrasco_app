import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInput } from '@ionic/angular';
@Component({
  selector: 'app-novo-amigo',
  templateUrl: './novo-amigo.page.html',
  styleUrls: ['./novo-amigo.page.scss'],
})

export class NovoAmigoPage implements OnInit {
  usuarios: any
  constructor(public navCtrl: NavController) { }
  @ViewChild('nome') nome:IonInput;
  @ViewChild('email') email:IonInput;
  @ViewChild('telefone') telefone:IonInput;
  
  ngOnInit() {
    
  }
  adicionar(){
    this.usuarios = JSON.parse(localStorage.getItem('data'));
    var amigo = 
    {
      "id": "1",
      "name": this.nome.value,
      "email": this.email.value,
      "telefone": this.telefone.value
    }
    this.usuarios.push(amigo)

    localStorage.setItem('data', JSON.stringify(this.usuarios))
    console.log(JSON.parse(localStorage.getItem('data')))
    this.navCtrl.navigateRoot('/amigos')
  }
}
