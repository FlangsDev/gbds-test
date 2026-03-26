import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) },
  { 
    path: '', 
    loadComponent: () => import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'master-barang', loadComponent: () => import('./features/master-barang/master-barang.component').then(m => m.MasterBarangComponent) },
      { path: 'recording/inward', loadComponent: () => import('./features/inward-report/inward-report.component').then(m => m.InwardReportComponent) },
      { path: 'recording/outward', loadComponent: () => import('./features/outward-report/outward-report.component').then(m => m.OutwardReportComponent) },
      { path: 'recording/adjustment', loadComponent: () => import('./features/adjustment/adjustment.component').then(m => m.AdjustmentComponent) },
      { path: 'recording/adjustment-v2', loadComponent: () => import('./features/adjustment-v2/adjustment-v2.component').then(m => m.AdjustmentV2Component) },
      { path: 'recording/stock-opname', loadComponent: () => import('./features/stock-opname/stock-opname.component').then(m => m.StockOpnameComponent) },
      { path: 'recording/saldo-awal', loadComponent: () => import('./features/saldo-awal/saldo-awal.component').then(m => m.SaldoAwalComponent) },
      { path: 'gr-gi/gr', loadComponent: () => import('./features/good-receipt/good-receipt.component').then(m => m.GoodReceiptComponent) },
      { path: 'gr-gi/gr/form', loadComponent: () => import('./features/good-receipt/good-receipt-form/good-receipt-form.component').then(m => m.GoodReceiptFormComponent) },
      { path: 'gr-gi/gi', loadComponent: () => import('./features/good-issue/good-issue.component').then(m => m.GoodIssueComponent) },
      { path: 'gr-gi/gi/form', loadComponent: () => import('./features/good-issue/good-issue-form/good-issue-form.component').then(m => m.GoodIssueFormComponent) },
      { path: 'upload/scan', loadComponent: () => import('./features/upload-scan/upload-scan.component').then(m => m.UploadScanComponent) },
      { path: 'upload/bc', loadComponent: () => import('./features/upload-bc/upload-bc.component').then(m => m.UploadBCComponent) },
      { path: 'reports/position', loadComponent: () => import('./features/position-report/position-report.component').then(m => m.PositionReportComponent) },
      { path: 'reports/mutation', loadComponent: () => import('./features/mutation-report/mutation-report.component').then(m => m.MutationReportComponent) },
      { path: 'history', loadComponent: () => import('./features/history/history.component').then(m => m.HistoryComponent) },
      { path: 'feedback', loadComponent: () => import('./features/feedback/feedback.component').then(m => m.FeedbackComponent) },
      { path: 'guidance', loadComponent: () => import('./features/guidance/guidance.component').then(m => m.GuidanceComponent) },
    ]
  },
  { path: '**', redirectTo: 'login' }
];
