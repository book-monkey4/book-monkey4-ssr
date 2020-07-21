import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanNavigateToAdminGuard implements CanActivate {

  accessGranted = false;

  constructor(@Inject(PLATFORM_ID) private pid: object) {}

  canActivate(): boolean {
    if (!this.accessGranted) {
      const question = $localize`:@@CanNavigateToAdminGuard\:question:Mit großer Macht kommt große Verantwortung. Möchten Sie den Admin-Bereich betreten?`;
      this.accessGranted = window.confirm(question);
    }
    return this.accessGranted;
  }
}
