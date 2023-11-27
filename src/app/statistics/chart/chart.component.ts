import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Highcharts from 'highcharts';
import { State } from '../state/statistic.reducer';
import { getStatistic } from '../state/statistic.select';


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

    Highcharts: typeof Highcharts = Highcharts;
    updateFlag = false;
    optFromInput!: Highcharts.Options;
    por = 34;

    /**
     *
     */
    constructor(private store: Store<State>) { }

    ngOnInit() {
        this.initialConfig();
        this.loadData();
    }



    initialConfig() {
        this.optFromInput = {
            chart: {
                type: 'column'
            },
            title: {
                align: 'center',
                text: 'POBLACIÓN COMPLETA',
            },

            xAxis: {
                categories: ['Estrato 6', 'Estrato 5', 'Estrato 4', 'Estrato 3', 'Estrato 2', 'Estrato 1']
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
        };
    }

    loadData() {
        this.store.select(getStatistic).subscribe((statistic) => {
            if (this.optFromInput) {
 //               if(statistic.unidadAcademica == ''){

//                    this.optFromInput.title!.text = 'POBLACIÓN COMPLETA';

 //               } else {

//                    this.optFromInput.title!.text = statistic.unidadAcademica + ' ' + statistic.programaAcademico;
 //               }
                this.optFromInput.series = statistic.series as any;
                this.optFromInput.plotOptions = {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            format: '{(multiply (divide point.y ' + statistic.total+ ') 100):.1f}%'
                        }
                    }
                };
                this.optFromInput.yAxis = {
                    min: 0,
                    title: {
                        text: 'Cantidad'
                    },
                    stackLabels: {
                        enabled: true,
                        format: '{total} - {(multiply (divide total '+statistic.total+') 100):.1f}%'
                    }
                }
                this.updateFlag = true;
            }
        })
    }

}