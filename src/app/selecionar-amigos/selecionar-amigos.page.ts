
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-selecionar-amigos',
  templateUrl: './selecionar-amigos.page.html',
  styleUrls: ['./selecionar-amigos.page.scss'],
})
export class SelecionarAmigosPage implements OnInit {
  usuarios: any;
  @ViewChild('lista') lista: IonList
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.usuarios = JSON.parse(localStorage.getItem('data'));
  }
  call_selecionar_produtos(){
    this.navCtrl.navigateRoot('/selecionar-produtos')
  }
}
