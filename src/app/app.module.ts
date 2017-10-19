import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Valores } from '../pages/valores/valores';
import { LinhaDetalhe } from '../pages/linhaDetalhe/linhaDetalhe';
import { Sobre } from '../pages/sobre/sobre';
import { DicasViagem } from '../pages/dicas-viagem/dicas-viagem';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Valores,
    LinhaDetalhe,
    DicasViagem,
    Sobre
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Valores,
    LinhaDetalhe,
    DicasViagem,
    Sobre
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
