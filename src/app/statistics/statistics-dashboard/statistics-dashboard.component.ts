import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/statistic.reducer';
import * as StatisticActions from '../state/statistic.actions'
import { ListService } from '../services/list.service';
import { AcademicUnit } from '../models/academic-unit.model';
import { firstValueFrom } from 'rxjs';
import { Program } from '../models/program.model';

@Component({
  selector: 'app-statistics-dashboard',
  templateUrl: './statistics-dashboard.component.html',
  styleUrls: ['./statistics-dashboard.component.css']
})
export class StatisticsDashboardComponent implements OnInit {

  grupoUnidadesAcademicas = [
    { value: 'Facultades', viewValue: 'Facultades' },
    { value: 'Escuelas', viewValue: 'Escuelas' },
    { value: 'Institutos', viewValue: 'Institutos' },
    { value: 'Corporaciones', viewValue: 'Corporaciones' },
  ];

  academicUnits: AcademicUnit[] = [];
  academicUnit!: number | undefined

  programs: Program[] = [];
  program!: number | undefined

  constructor(private store: Store<State>, private listService: ListService) { }

  async ngOnInit() {
    this.store.dispatch(StatisticActions.loadStatitics({idAcademicUnit:undefined, idProgram: undefined}));
    await this.getAcademicUnits();
  }

  async getAcademicUnits() {
    this.academicUnits = await firstValueFrom(this.listService.getAcademitUnits());
  }

  async onChangeAcademicUnit() {
    
    this.program = undefined;
    this.programs = [];
    if (this.academicUnit) {
      this.programs = await firstValueFrom(this.listService.getPrograms(this.academicUnit))
    }
  }

  getStatistic() {
    this.store.dispatch(StatisticActions.loadStatitics({idAcademicUnit:this.academicUnit, idProgram:this.program}));
  }


}
