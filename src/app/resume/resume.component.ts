import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Tharusha Kavinda - Resume');
  }
  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'Resume Tharusha Kavinda.pdf');
    link.setAttribute('download', 'Resume Tharusha Kavinda.pdf');
    link.click();
    link.remove();

  }
}
