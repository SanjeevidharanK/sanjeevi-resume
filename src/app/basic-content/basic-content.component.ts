import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-content',
  templateUrl: './basic-content.component.html',
  styleUrls: ['./basic-content.component.css']
})
export class BasicContentComponent {
  constructor(){}
  downloadResume(){
    const link = document.createElement('a')
    link.href = "assets/Sanjeevdharan.krishnan-resume.pdf"
    link.download = 'Sanjeevidharan_Krishnan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  }
}
