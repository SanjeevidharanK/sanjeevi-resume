import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-content',
  templateUrl: './experience-content.component.html',
  // standalone:true,
  styleUrls: ['./experience-content.component.css']
})
export class ExperienceContentComponent{
  constructor(private router:Router){}
  chq:boolean=false
  call(){
    let a =document.getElementsByClassName('container')
    // a[0].innerHTML.
    this.chq = true
    setTimeout(() => {
    this.chq = false
    this.router.navigateByUrl('vys')
    }, 2000);
      
  }
  calls(){
    let a =document.getElementsByClassName('container')
    // a[0].innerHTML.
    this.chq = true
    setTimeout(() => {
    this.chq = false
    this.router.navigateByUrl('bb')
    }, 2000);
      
  }

}
