import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';

constructor(private issueService: IssueService, private router: Router) 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
