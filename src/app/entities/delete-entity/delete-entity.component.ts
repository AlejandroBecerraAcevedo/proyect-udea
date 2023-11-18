import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/entity.reducer';
import { Observable } from 'rxjs';
import { getCurrentEntityId } from '../state/entity.select';
import * as EntityActions from '../state/entity.actions';

@Component({
  selector: 'app-delete-entity',
  templateUrl: './delete-entity.component.html',
  styleUrls: ['./delete-entity.component.css']
})
export class DeleteEntityComponent implements OnInit {

  entityId$!: Observable<number>

  constructor(private store: Store<State>) {}

  ngOnInit(){
    this.entityId$ = this.store.select(getCurrentEntityId) as Observable<number>;
  }

  delete(entityId: number){
    this.store.dispatch(EntityActions.deleteEntity({entityId}));
  }

}
