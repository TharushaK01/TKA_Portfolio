import { Component, Input } from '@angular/core';
import { Project } from '../_model/Project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  router: any;
  projectLink: any;
  name: any;
  projects: any;

  OpenProjectModal(){
    this.router.navigate.show(ProjectModalComponent);
  }

};
