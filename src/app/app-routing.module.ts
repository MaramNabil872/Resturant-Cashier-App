import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registeration',
    loadChildren: () => import('./pages/registeration/registeration.module').then( m => m.RegisterationPageModule)
  },
  {
    path: 'operation-date',
    loadChildren: () => import('./pages/operation-date/operation-date.module').then( m => m.ChooseDatePageModule)
  },
  {
    path: 'operation-type',
    loadChildren: () => import('./pages/operation-type/operation-type.module').then( m => m.OperationTypePageModule)
  },
  {
    path: 'operation-fromto',
    loadChildren: () => import('./pages/operation-fromto/operation-fromto.module').then( m => m.OperationFromtoPageModule)
  },
  {
    path: 'operation-about',
    loadChildren: () => import('./pages/operation-about/operation-about.module').then( m => m.OperationAboutPageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./pages/supplier/supplier.module').then( m => m.SupplierPageModule)
  },
  {
    path: 'driver',
    loadChildren: () => import('./pages/driver/driver.module').then( m => m.DriverPageModule)
  },
  {
    path: 'under-account',
    loadChildren: () => import('./pages/under-account/under-account.module').then( m => m.UnderAccountPageModule)
  },
  {
    path: 'account-closure',
    loadChildren: () => import('./pages/account-closure/account-closure.module').then( m => m.AccountClosurePageModule)
  },
  {
    path: 'casheir-net',
    loadChildren: () => import('./pages/casheir-net/casheir-net.module').then( m => m.CasheirNetPageModule)
  },
  {
    path: 'investor',
    loadChildren: () => import('./pages/investor/investor.module').then( m => m.InvestorPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'edit-operation',
    loadChildren: () => import('./pages/edit-operation/edit-operation.module').then( m => m.EditOperationPageModule)
  },
  {
    path: 'users-dashboard',
    loadChildren: () => import('./pages/users-dashboard/users-dashboard.module').then( m => m.UsersDashboardPageModule)
  },
  {
    path: 'suppliers-dashboard',
    loadChildren: () => import('./pages/suppliers-dashboard/suppliers-dashboard.module').then( m => m.SuppliersDashboardPageModule)
  },
  {
    path: 'drivers-dashboard',
    loadChildren: () => import('./pages/drivers-dashboard/drivers-dashboard.module').then( m => m.DriversDashboardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
