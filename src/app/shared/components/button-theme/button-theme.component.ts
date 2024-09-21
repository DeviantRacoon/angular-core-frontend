import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@modules/web/services';

@Component({
  selector: 'app-button-theme',
  standalone: true,
  imports: [],
  templateUrl: './button-theme.component.html',
  styleUrl: './button-theme.component.scss'
})
export class ButtonThemeComponent implements OnInit {
  theme: boolean = true;

  constructor(
    private _localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.theme = this.getTheme();
  }

  changeTheme(theme: any) {
    let value = theme.target.checked
    this._localStorageService.setItem('theme', value ? 'dark' : 'light');

    this.getTheme();
  }

  getTheme(): boolean {
    const theme = this._localStorageService.getItem<'light' | 'dark'>('theme') || 'light';
    this.setTheme(theme);
    return theme !== 'light';
  }

  setTheme(theme: 'light' | 'dark') {
    document.body.setAttribute('data-bs-theme', theme);
  }

}
