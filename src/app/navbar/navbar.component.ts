import { Component, OnInit } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  themeIcon = faSun;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme() {
    console.log("clicked");
    
    this.themeIcon = this.themeIcon === faSun ? faMoon : faSun;
    document.body.classList.toggle('dark-theme');
  }
}