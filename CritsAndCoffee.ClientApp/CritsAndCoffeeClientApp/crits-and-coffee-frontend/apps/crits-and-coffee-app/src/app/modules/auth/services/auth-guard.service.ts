import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(private _authService: AuthService, private _store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    if (!this._store.selectSnapshot(state => state.auth.access_token) ||
      !this._store.selectSnapshot(state => state.auth.user.scopes).includes(expectedRole)
    ) {
      this._store.dispatch(new Navigate(['/auth/login']));
      return false;
    }
    return true;
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthService, private _store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this._store.selectSnapshot(state => state.auth.access_token)) {
      this._store.dispatch(new Navigate(['/auth/login']));
      return false;
    }
    return true;
  }
}
