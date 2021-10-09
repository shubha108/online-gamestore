import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  /*removerItem(p: any) {
    throw new Error('Method not implemented.');
  }*/

  shopping_cart_items: any[]=[];

  constructor() { }
  addProduct = (product: any)=>{
    let items = this.get_shopping_cart_items();
    if(items){
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    }else{
      this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }
    //localStorage.setItem('shopping_cart', JSON.stringify(product))
  }

  get_shopping_cart_items=()=>{
    let items:any = localStorage.getItem('shopping_cart')
    return JSON.parse(items)
  }

  getCartLength =()=>{
    let items = this.get_shopping_cart_items();
    return items? this.get_shopping_cart_items().length: 0
    console.log('get', items)
  }
  getTotal = ()=>{
    let items = this.get_shopping_cart_items();
    return items?.reduce((acc:any, item:any)=> acc+ item.price, 0)
  }

  removerItem=(p:any)=>{
    console.log('calling remove', p)
    let items= this.get_shopping_cart_items();

    const index = items.findIndex((item: { id: any; }) => item.id == p.id);
    if(index>=0){
      console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }
  }





}
