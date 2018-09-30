import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  providers: []
})
export class NavbarComponent implements OnInit {

  @Input() userInfo: any;
  constructor() {
  }

  ngOnInit() {
  }
}
