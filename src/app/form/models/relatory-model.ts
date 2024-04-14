import { BabyRomper } from "./baby-romper-model";
import { ClientModel } from "./client-model";
import { ResumeTotalItens } from "./resume-itens-totals";
import { ServiceProvider } from "./service-provider";
import { TotalsResume } from "./totals-resume";

export interface RelatoryModel {
    serviceProvider: ServiceProvider,
    client: ClientModel,
    BabyRompers: Array<BabyRomper>,
    Totals: ResumeTotalItens,
}

