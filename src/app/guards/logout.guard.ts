import { ActivatedRouteSnapshot, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const logoutGuard = (): CanDeactivateFn<DashboardComponent> => {
    return (
        component: DashboardComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot): MaybeAsync<GuardResult> => {

        if (nextState.url === '/login') {
            const authService = inject(AuthService);
            const confirmation = confirm('Deseja realmente sair?');

            if (confirmation) {
                authService.logout();
                return true;
            } else {
                return false;
            }
        }

        return true;
    };
};