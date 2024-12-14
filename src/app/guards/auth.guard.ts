import { inject } from "@angular/core";
import { CanActivateFn, GuardResult, MaybeAsync, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { catchError, map } from "rxjs";

export const authGuard = (): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        console.log('authGuard');

        const authService = inject(AuthService);
        const router = inject(Router);

        return authService.verifyToken().pipe(
            catchError(() => {
                console.log('authGuard erro');
                return router.navigate(['login']);
            }),
            map(() => {
                console.log('authGuard sucesso');
                return true;
            }),
        );
    }
};