import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from 'src/app/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  project: Project[] | undefined;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAllProject().subscribe((responce: Project[]) => {
      this.project = responce;
    });
  }
}
