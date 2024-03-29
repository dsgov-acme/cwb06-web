import { Route } from '@angular/router';
import { CanDeactivateStepperGuard } from '@dsg/shared/ui/nuverial';

export const publicFeatureDashboardRoutes: Route[] = [
  {
    loadComponent: () => import('./components/dashboard').then(module => module.DashboardComponent),
    path: '',
  },
  {
    children: [
      {
        canDeactivate: [CanDeactivateStepperGuard],
        loadComponent: () => import('./components/intake').then(module => module.IntakeFormComponent),
        path: '',
      },
      {
        loadComponent: () => import('./components/readonly').then(module => module.ReadonlyComponent),
        path: 'readonly',
      },
      {
        loadComponent: () => import('./components/confirmation').then(module => module.ConfirmationComponent),
        path: 'submitted',
      },
    ],
    loadComponent: () => import('./components/transaction-routing').then(module => module.TransactionRoutingComponent),
    path: 'transaction/:transactionId',
  },
  {
    loadComponent: () => import('./components/readonly').then(module => module.ReadonlyComponent),
    path: 'transaction/:transactionId/readonly',
  },
  { path: '**', redirectTo: '' },
];
