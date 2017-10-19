import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, MenuController} from 'ionic-angular';
import { Http} from '@angular/http';

import {LinhaDetalhe} from '../linhaDetalhe/linhaDetalhe';
import {Sobre} from '../sobre/sobre';
import {Valores} from '../valores/valores';
import {DicasViagem} from '../dicas-viagem/dicas-viagem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
   public linhas;
  
   constructor(public navCtrl: NavController
              , private _http: Http
              , private _loadingCtrl: LoadingController
              , private _alertCtrl: AlertController
              , private _menu: MenuController
            ) 
    {}
  
  ngOnInit(){
    this._menu.enable(true);
    let loader = this._loadingCtrl.create({
      content: "carregando horários. Aguarde ...",
    });

    loader.present()
    this._http.get('data/linha_horario.json')
    .map(res => res.json())
    .toPromise()
    .then(linhas => {
        this.linhas = linhas; 
        loader.dismiss()
      }, 
        err => {
          loader.dismiss();
          this._alertCtrl.create({
            title: "Erro ao buscar horários",
            buttons:[{text: 'Atualize este aplicativo'}],
            subTitle:'Não foi possivel acessar o arquivo com os horários'  
        }).present();
    });
  }

  seleciona(linha){
    this.navCtrl.push(LinhaDetalhe, {linhaSelecionada: linha})
  }

  sobre(){
    this.navCtrl.push(Sobre)
  }

  valores(){
    this.navCtrl.push(Valores)
  }

  dicasViagem(){
    this.navCtrl.push(DicasViagem)
  }

  fecharMenu(){
    this.navCtrl.setRoot(HomePage)
  }
}
