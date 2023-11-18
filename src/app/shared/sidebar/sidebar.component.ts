import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSowSideBar } from 'src/app/dashboard/state/dashboard.select';
import { State } from 'src/app/state/app.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  showSideBar$!: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.showSideBar$ = this.store.select(getSowSideBar);
  }



}
