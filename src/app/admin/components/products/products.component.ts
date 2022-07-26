import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService) { 
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
   this.httpClientService.get<Create_Product[]>({
     controller:"products"
   }).subscribe(data=>{
   console.log(data);
   });

  //  this.httpClientService.post({
  //   controller:"products",
  //  },{
  //   name:"Saftali",
  //   stock:100,
  //   price:43
  //  }).subscribe();
  //  this.httpClientService.post({
  //   controller:"products",
  //  },{
  //   name:"Albali",
  //   stock:100,
  //   price:323
  //  }).subscribe();

  //  this.httpClientService.post({
  //   controller:"products",
  //  },{
  //   name:"Snickers",
  //   stock:100,
  //   price:80
  //  }).subscribe();
  // this.httpClientService.put({
  //   controller:"products"
  // },{
  //   id:"1e2de98a-c363-4bc4-9815-08da679276c4",
  //   name:"Deyisilmis products",
  //   stock:443,
  //   price:5
  // }).subscribe();

  // this.httpClientService.delete({
  //   controller:"products"
  // },"1e2de98a-c363-4bc4-9815-08da679276c4").subscribe()
  this.httpClientService.get({
   fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
  }).subscribe(data=>console.log(data));
  }

}
