import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }





  buttonState: string = 'Login';

  toggleButtonState() {
    this.buttonState = this.buttonState === 'Login' ? 'Logout' : 'Login'
}}