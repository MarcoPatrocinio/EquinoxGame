import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/front/geral/header/header.component';
import { NovoJogoComponent } from './components/front/pages/novo-jogo/novo-jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NovoJogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
