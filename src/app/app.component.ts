import { Component } from '@angular/core';

import {Producto} from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productoArray: Producto[] = [
  {codigo:1 , descripcion:"Guarana ",precio:"9.50"},
  {codigo:2 , descripcion:"IncaKola ",precio:"8.50"},
  {codigo:3 , descripcion:"CocaCola ",precio:"10.50"}

];

selectedProducto: Producto = new Producto();

addOrEdit(){
  if(this.selectedProducto.codigo === 0){
    this.selectedProducto.codigo = this.productoArray.length + 1;
    this.productoArray.push(this.selectedProducto);
  }
  this.selectedProducto = new Producto();
}

EditarProducto(producto : Producto){
   this.selectedProducto = producto;
}

Eliminar (producto : Producto){
  const prod = this.selectedProducto = producto;
  this.productoArray = this.productoArray.filter(x => x != prod);
}
}
