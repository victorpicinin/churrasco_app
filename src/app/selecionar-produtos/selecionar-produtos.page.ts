import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-selecionar-produtos',
  templateUrl: './selecionar-produtos.page.html',
  styleUrls: ['./selecionar-produtos.page.scss'],
})
export class SelecionarProdutosPage implements OnInit {
  usuarios: Observable<any>
  @ViewChild('lista') lista: IonList
  constructor(private dataService: DataService,public navCtrl: NavController,public alertController: AlertController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
    console.log(this.usuarios)
  }
  async call_home(){
    this.navCtrl.navigateRoot('/home')
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Pedido Concluido!',
      message: 'Muito obrigado, sua solicitação sera processada',
      buttons: ['OK']
    });
    await alert.present();
  }

}
