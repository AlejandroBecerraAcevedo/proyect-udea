import { Gender } from "./gender.enum";

export interface Statistic {
    unidadAcademica: string;
    programaAcademico: string;
    total: number;
    series: {
        name: string,
        data: number[]
    }[]
}