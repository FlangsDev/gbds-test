import {
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-H43VSBM5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "gbdps-app";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: `<router-outlet></router-outlet>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app-frontend/app.component.ts", lineNumber: 11 });
})();

// src/app-frontend/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadComponent: () => import("./chunk-3FLPVNIW.js").then((m) => m.LoginComponent) },
  {
    path: "",
    loadComponent: () => import("./chunk-VDNC67VT.js").then((m) => m.MainLayoutComponent),
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-QIEXTNRV.js").then((m) => m.DashboardComponent) },
      { path: "master-barang", loadComponent: () => import("./chunk-33UECBJE.js").then((m) => m.MasterBarangComponent) },
      { path: "recording/inward", loadComponent: () => import("./chunk-EF64FGFZ.js").then((m) => m.InwardReportComponent) },
      { path: "recording/outward", loadComponent: () => import("./chunk-S3VSATBY.js").then((m) => m.OutwardReportComponent) },
      { path: "recording/adjustment", loadComponent: () => import("./chunk-4W7NOOBZ.js").then((m) => m.AdjustmentComponent) },
      { path: "recording/adjustment-v2", loadComponent: () => import("./chunk-CTRBITWZ.js").then((m) => m.AdjustmentV2Component) },
      { path: "recording/stock-opname", loadComponent: () => import("./chunk-SOX4PPV3.js").then((m) => m.StockOpnameComponent) },
      { path: "recording/saldo-awal", loadComponent: () => import("./chunk-7Q2QWWKD.js").then((m) => m.SaldoAwalComponent) },
      { path: "gr-gi/gr", loadComponent: () => import("./chunk-ZDM3JPVO.js").then((m) => m.GoodReceiptComponent) },
      { path: "gr-gi/gr/form", loadComponent: () => import("./chunk-MUOJS3ZW.js").then((m) => m.GoodReceiptFormComponent) },
      { path: "gr-gi/gi", loadComponent: () => import("./chunk-6DF2JWE4.js").then((m) => m.GoodIssueComponent) },
      { path: "gr-gi/gi/form", loadComponent: () => import("./chunk-YUOHFR4Y.js").then((m) => m.GoodIssueFormComponent) },
      { path: "upload/scan", loadComponent: () => import("./chunk-X77I6QWJ.js").then((m) => m.UploadScanComponent) },
      { path: "upload/bc", loadComponent: () => import("./chunk-SCOLGDG7.js").then((m) => m.UploadBCComponent) },
      { path: "reports/position", loadComponent: () => import("./chunk-H4JNNCVN.js").then((m) => m.PositionReportComponent) },
      { path: "reports/mutation", loadComponent: () => import("./chunk-NLMV4LKD.js").then((m) => m.MutationReportComponent) },
      { path: "history", loadComponent: () => import("./chunk-7OSX63TS.js").then((m) => m.HistoryComponent) },
      { path: "feedback", loadComponent: () => import("./chunk-3Z57ULUF.js").then((m) => m.FeedbackComponent) },
      { path: "guidance", loadComponent: () => import("./chunk-LXTVCUIS.js").then((m) => m.GuidanceComponent) }
    ]
  },
  { path: "**", redirectTo: "login" }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
