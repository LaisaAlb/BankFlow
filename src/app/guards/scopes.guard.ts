import { inject } from "@angular/core";
import { CanActivateFn, GuardResult, MaybeAsync, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const scopesGuard = (scope: string): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        const authService = inject(AuthService);
        const router = inject(Router);

        const userScopes = authService.getUserScopes();

        if (userScopes.find((userScope) => userScope === scope)) {
            console.log('scopesGuard sucesso');
            return true;
        } else {
            console.log('scopesGuard erro');
            return router.navigate(['not-authorized']);
        }
    };
};