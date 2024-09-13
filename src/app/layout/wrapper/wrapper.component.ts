import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {
  theme: 'light' | 'dark' = 'dark';
  showMenu: boolean = true;

  constructor() { }


}
