import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/entity.reducer';
import { getCurrentEntity } from '../state/entity.select';
import { Observable, Subscription, tap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Entity } from '../models/entity.model';

import * as EntityActions from '../state/entity.actions';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.css']
})
export class CreateEntityComponent implements OnInit {

  subscription!: Subscription;

  entityForm!: FormGroup;

  entity$!: Observable<Entity | null | undefined>;

  constructor(private store: Store<State>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.entity$ = this.store.select(getCurrentEntity)
      .pipe(
        tap(currentEntity => this.displayEntity(currentEntity as Entity | null))
      );

  }

  createForm() {
    this.entityForm = this.fb.group({
      name: [null]
    });
  }

  displayEntity(entity: Entity | null) {
    if (entity) {
      this.entityForm.reset()
      this.entityForm.patchValue({
        name: entity.name
      });
    }
  }

  save(originalEntity: Entity){
    if(this.entityForm.valid){
      const entity = {...originalEntity, ...this.entityForm.value};
      if(entity.id === 0){
        this.store.dispatch(EntityActions.createEntity({entity}));
      } else {
        this.store.dispatch(EntityActions.updateEntity({entity}));
      }
    };
  }

}
