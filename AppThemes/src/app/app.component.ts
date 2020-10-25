import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AppThemes';
  themeDark = 'theme-dark';
  themeLight = 'theme-light';
  storedTheme: string = localStorage.getItem('theme-color');

  constructor() { }

  ngOnInit() {

  }

  setTheme() {
    const themeColor = this.storedTheme === this.themeDark ? this.themeLight : this.themeDark;
    localStorage.setItem('theme-color', themeColor);
    this.storedTheme = localStorage.getItem('theme-color');
  }
}
