import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-nova-festa',
  templateUrl: './nova-festa.page.html',
  styleUrls: ['./nova-festa.page.scss'],
})
export class NovaFestaPage implements OnInit {
  usuarios: any;
  @ViewChild('lista') lista: IonList
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.usuarios = JSON.parse(localStorage.getItem('data'));
    console.log('editar',this.usuarios);
  }
  call_selecionar_amigos(){
    this.navCtrl.navigateRoot('/selecionar-amigos')
  }

}
