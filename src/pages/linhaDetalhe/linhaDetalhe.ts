import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';

 
@Component({
    templateUrl: 'linhaDetalhe.html'
})

export class LinhaDetalhe {
    public linha;
    
    constructor(public navParams: NavParams){
        this.linha = navParams.get('linhaSelecionada')
    }
}
