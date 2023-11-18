import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/entity.reducer';
import * as EntityActions from '../state/entity.actions';
import { Observable } from 'rxjs';
import { Entity } from '../models/entity.model';
import { getEntities } from '../state/entity.select';
import { MatDialog } from '@angular/material/dialog';
import { CreateEntityComponent } from '../create-entity/create-entity.component';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'actions'
  ];

  data$!: Observable<Entity[]>

  constructor(
    private store: Store<State>,
    public dialog: MatDialog
  ) { }
  
  ngOnInit() {
    this.loadEntities();
    this.data$ = this.store.select(getEntities);
  }

  loadEntities() {
    this.store.dispatch(EntityActions.loadEntities());
  }

  edit(currentEntityId: number) {
    this.store.dispatch(EntityActions.setCurrentEntity({ currentEntityId}));
    const dialogRef = this.dialog.open(CreateEntityComponent);
  }

  add() {
    this.store.dispatch(EntityActions.initializeCurrentEntity());
    const dialogRef = this.dialog.open(CreateEntityComponent);
  }

  delete(currentEntityId: number) {
    this.store.dispatch(EntityActions.setCurrentEntity({ currentEntityId }));
    const dialogRef = this.dialog.open(DeleteEntityComponent);
  }

}
