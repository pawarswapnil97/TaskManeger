import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string = '';
  Username: string = '';
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay: any;

  Clients: any;
  Project: any;
  Years: number[] = [];
  TeamMembersSummary: any;
  TeamMembers: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Swapnil Pawar';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.ToDay = new Date();

    this.Clients = [
      'ABC infotech Ltd',
      'DEF Software solution',
      'GHI Indderstrice',
    ];

    this.Project = ['Project A', 'Project B', 'Project C', 'Project D'];

    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 1, Name: 'Anna', Status: 'Available' },
          { ID: 2, Name: 'Arun', Status: 'Available' },
          { ID: 3, Name: 'Varun', Status: 'Busy' },
          { ID: 4, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 1, Name: 'Krishna', Status: 'Available' },
          { ID: 2, Name: 'Mohan', Status: 'Available' },
          { ID: 3, Name: 'Raju', Status: 'Busy' },
          { ID: 4, Name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 1, Name: 'Jacob', Status: 'Available' },
          { ID: 2, Name: 'Smith', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }

  onProjectChange($event: any) {
    if ($event.target.innerHTML == 'Project A') {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52536;
    } else if ($event.target.innerHTML == 'Project B') {
      this.ProjectCost = 888348;
      this.CurrentExpenditure = 223334;
      this.AvailableFunds = 67897;
    } else if ($event.target.innerHTML == 'Project C') {
      this.ProjectCost = 774763;
      this.CurrentExpenditure = 66723;
      this.AvailableFunds = 2343;
    } else if ($event.target.innerHTML == 'Project D') {
      this.ProjectCost = 34567;
      this.CurrentExpenditure = 2345;
      this.AvailableFunds = 345;
    }
  }
}
