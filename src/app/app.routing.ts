import { Routes } from '@angular/router';

import { AngularComponent } from './angular/angular.component';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';

import { InicioComponent } from './inicio/inicio.component';

export const appRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/autenticacao/entrar',
	}, {
		path: 'autenticacao',
		pathMatch: 'full',
		redirectTo: 'autenticacao/entrar',
	}, {
		path: 'autenticacao',
		component: AutenticacaoComponent,
		children: [
			{
				path: 'entrar',
				component: EntrarComponent,
			}, {
				path: 'cadastrar',
				component: CadastrarComponent,
			},
		],
	}, {
		path: 'inicio',
		component: InicioComponent,
		children: [],
	}, {
		path: 'angular',
		component: AngularComponent,
		children: [],
	},
];