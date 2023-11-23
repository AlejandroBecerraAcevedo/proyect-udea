import { EntityListComponent } from "../entities/entity-list/entity-list.component";
import { ProbabilitiesDashboardComponent } from "../probabilities/probabilities-dashboard/probabilities-dashboard.component";
import { StatisticsDashboardComponent } from "../statistics/statistics-dashboard/statistics-dashboard.component";

export const dashboardRoutes = [
    {
        path: 'entities', component: EntityListComponent
        
    },
    {
        path: 'statistics', component: StatisticsDashboardComponent
    },
    {
        path: 'probabilities', component: ProbabilitiesDashboardComponent
    }
];