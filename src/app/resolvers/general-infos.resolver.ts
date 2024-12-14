import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { GeneralInfosService } from "../services/general-infos.service";
import { firstValueFrom } from "rxjs";

export const generalInfosResolver: ResolveFn<any> = () => {
    const generalInfosService = inject(GeneralInfosService);

    return Promise.all([
        firstValueFrom(generalInfosService.getIncidents()),
        firstValueFrom(generalInfosService.getPendingPayments()),
        firstValueFrom(generalInfosService.getNewAccounts()),
        firstValueFrom(generalInfosService.getActiveUsers()),
    ]).then(([incidents, pendingPayments, newAccounts, activeUsers]) => {
        return {
            incidents,
            pendingPayments,
            newAccounts,
            activeUsers
        };
    });
};