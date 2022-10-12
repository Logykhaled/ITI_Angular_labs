import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent  {
  username="";
  userage=0;
  AllUsers: { name: string; age: number; }={ name:this.username ,age:this.userage};
  @Output() logy = new EventEmitter();

  ADD(){
    if(this.userage>20 && this.userage <50){
   this.AllUsers={ name:this.username ,age:this.userage};
   this.logy.emit(this.AllUsers);
  }
}

}
