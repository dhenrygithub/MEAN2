import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';

constructor(private issueService: IssueService, private router: Router) 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
