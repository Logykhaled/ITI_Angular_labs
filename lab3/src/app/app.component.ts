import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  DataFromReg : {name:string, age:number}[] = [];


  GetData(data:any){
    
    this.DataFromReg.push(data) ;
    console.log( this.DataFromReg);
  }

}
