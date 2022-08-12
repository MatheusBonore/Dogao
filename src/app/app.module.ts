import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from 'src/services/usuario/usuario.service';

import { appRoutes } from './app.routing';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';

import { InicioComponent } from './inicio/inicio.component';

@NgModule({
	declarations: [
		AppComponent,
		AutenticacaoComponent,
		EntrarComponent,
		CadastrarComponent,
		AngularComponent,
		NavbarComponent,
		NavbarBottomComponent,
		InicioComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [
		UsuarioService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
