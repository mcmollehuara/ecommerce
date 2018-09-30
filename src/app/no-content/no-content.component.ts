import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'no-content',
  // template: `
  //   <div>
  //     <h1>Página en construción</h1>
  //   </div>
  // `
  templateUrl: 'no-content.component.html'
})
export class NoContentComponent {
  constructor(
    private router: Router
  ) { }
  onSearchArrival(arrival) {
    let that = this;
    that.router.navigate(["app/ecommerce/busqueda", arrival]);    
  }
}
