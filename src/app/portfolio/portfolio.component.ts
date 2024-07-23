import { Component, OnInit, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];


  isCollapsed: boolean = true;
  typescript: boolean = false;
  html: boolean = false;
  css: boolean = false;
  javascript: boolean = false;

  angular: boolean = false;
  filtering: Boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Tharusha Kavinda - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASRIPT);
    }
    if (this.typescript || this.angular || this.html || this.css || this.javascript) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }


    this.projects =this.projectService.GetProjectByFilter(filterTags);
  }
  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    this.html = false;
    this.css = false;
    this.javascript = false;
    this.filtering = false;
   

    this.projects = this.projectService.GetProjects();
  }

}
