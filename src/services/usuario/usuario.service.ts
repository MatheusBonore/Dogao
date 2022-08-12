import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppService } from '../app.servico';

import { Usuario } from 'src/models/usuario';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService implements OnInit {
	private _usuario!: Usuario;

	set usuario(usuario: Usuario) {
		this._usuario = usuario;
	}

	get usuario(): Usuario {
		return this._usuario;
	}

	constructor(
		private http: HttpClient,
		private appService: AppService,

	) { }

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
}
