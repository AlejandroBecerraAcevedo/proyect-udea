import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import * as DashBoardActions from '../../dashboard/state/dashboard.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private store: Store<State>){}

  toggleSideBar(){
    this.store.dispatch(DashBoardActions.toggleSideBar());
  }

}
