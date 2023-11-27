import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/probability.reducer';
import * as ProbabilityActions from '../state/probility.action';
import { RequestProbabiity } from '../models/request-probability';
import { ListService } from '../service/list.service';
import { forkJoin } from 'rxjs';
import { Municipality } from '../models/municipality.model';
import { SocialStratum } from '../models/social-stratum.model';
import { Program } from '../models/program.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-probabilities-dashboard',
  templateUrl: './probabilities-dashboard.component.html',
  styleUrls: ['./probabilities-dashboard.component.css']
})
export class ProbabilitiesDashboardComponent implements OnInit {

  municipalities: Municipality[] = [];
  socialStratums: SocialStratum[] = [];
  programs: Program[] = [];
  form!: FormGroup;

  constructor(private store: Store<State>, private listService: ListService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loadList();
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group(
      {
        gender: ['femenino', Validators.required],
        idMunicipality: [undefined, Validators.required],
        idSocialStratum: [undefined, Validators.required],
        idProgram: [undefined, Validators.required]
      }
    )
  }

  loadList(){
      forkJoin({
        municipalities: this.listService.getMunicipalities(),
        socialStratums: this.listService.getSocialStratums(),
        programs: this.listService.getPrograms()

      }).subscribe((lists)=> {
        console.log("listas",lists);
         this.municipalities = lists.municipalities;
         this.socialStratums = lists.socialStratums;
         this.programs = lists.programs;
      })
  }

  onCalculateProbability(){
      this.form.markAllAsTouched();
      if(this.form.valid){
        const requestProbability = this.form.value; 
        this.store.dispatch(ProbabilityActions.calcultateProbability(
          {requestProbability: requestProbability as RequestProbabiity}
        ));
      }
  }
}
