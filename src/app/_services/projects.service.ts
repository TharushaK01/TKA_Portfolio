import { Injectable } from '@angular/core';
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "AG Products Tanzania", pictures: ['02.jpg', '03.jpg', '04.jpg'], projectLink: "https://github.com/TharushaK01/AGProducts.git", sumary: "AG Products Tanzania is a leading provider of agricultural products and services in Tanzania. Their website serves as an online presence to showcase their wide range of products, provide information about their services, and facilitate customer engagement and support.", description: "This is a sample project for this portfolio website.", tags: [Tag.HTML, Tag.CSS, Tag.JAVASRIPT]},
    {id: 1, name: "Frank_chawe", pictures: ['02.jpg', '03.jpg', '04.jpg'], projectLink: "https://github.com/TharushaK01/Frank_chawe.git", sumary: "Frank_chawe is a web project showcasing a responsive and interactive website. This project includes various HTML, CSS, SCSS, and JavaScript files to build a comprehensive user interface.", description: "This is a sample project for this portfolio website.", tags: [Tag.HTML, Tag.SCSS, Tag.CSS]},
    {id: 2, name: "Portfolio Site", pictures: ['02.jpg', '03.jpg', '04.jpg'], projectLink: "https://github.com/TharushaK01/Portfolio.git", sumary: "This collection showcases my projects, demonstrating my skills in web development using the Angular framework. Each project emphasizes responsive design and user-friendly interfaces, reflecting my commitment to delivering high-quality web applications. Explore the code to see my approach to building scalable and maintainable software solutions.", description: "This is a sample project for this portfolio website.", tags: [Tag.ANGULAR, Tag.HTML, Tag.TYPESRIPT, Tag.CSS]},

  ];
  static tags: any;

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);
    
    if (project == undefined) {
      throw new TypeError('There is no project that matches the id:' +id);
    }

    return project;
  }
  GetProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function(filterTags) {
      if (project.tags.includes(filterTags) == false) {
         foundAll = false;
      }
    });
    if (foundAll) {
      filteredProjects.push(project);
    }
  });
  return filteredProjects;

  }

}
