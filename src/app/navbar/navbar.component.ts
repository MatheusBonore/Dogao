import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	@Output() public childEvent = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void { }

	public retornar_item(path: string) {
		this.childEvent.emit(path);
	}
}
