import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICE/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any

  constructor(public api: ApiService) {}


  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.api.getJson().subscribe((resp: any)=>{
      this.items = resp
    })
  }

}
