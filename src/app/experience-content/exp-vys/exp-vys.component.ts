import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-vys',
  templateUrl: './exp-vys.component.html',
  styleUrls: ['./exp-vys.component.css']
})
export class ExpVysComponent implements OnInit {
  constructor(){}
  sixt:number = 0
  hunt:number = 0
  inter:any
  intere:any
  ngOnInit(): void {
    
    this.inter = setInterval(()=>{
      this.sixt += 1
      if (this.sixt >= 60){
        clearInterval(this.inter)
      }
    },50)
     
    this.intere = setInterval(()=>{
      this.hunt += 1
      if (this.hunt >= 100){
        clearInterval(this.intere)
      }
    },50)
  }
}
