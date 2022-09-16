import { Component, OnInit } from '@angular/core';
import {StateService} from '../../../../common/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    public stateService: StateService
  ) { }

  ngOnInit(): void {
  }

}
