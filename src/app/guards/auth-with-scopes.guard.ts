import { CanActivateFn, GuardResult, MaybeAsync, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { catchError, map } from "rxjs";

export const authWithScopes = (scope: string): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        const authService = inject(AuthService);
        const router = inject(Router);

        return authService.verifyToken().pipe(
            catchError(() => {
                return router.navigate(['login']);
            }),
            map(() => {
                const HAS_ROUTE_SCOPE = authService.getUserScopes().find(userScope => userScope === scope);

                if (HAS_ROUTE_SCOPE) {
                    return true;
                } else {
                    router.navigate(['not-authorized']);

                    return false;
                }
            }),
        );
    };
};