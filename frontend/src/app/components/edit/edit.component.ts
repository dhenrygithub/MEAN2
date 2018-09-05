import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';

constructor(private issueService: IssueService, private router: Router) 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
