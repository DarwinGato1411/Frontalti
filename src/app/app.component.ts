import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.navigate(["orden"])
  }

  Clientes(){

    this.route.navigate(["clientenav"])
  }
  Articulos(){

    this.route.navigate(["articulo"])
  }
  Orden(){

    this.route.navigate(["orden"])
  }
}