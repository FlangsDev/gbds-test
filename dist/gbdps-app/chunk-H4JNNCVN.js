import {
  CommonModule,
  Component,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/position-report/position-report.component.ts
function PositionReportComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 4);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 5);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 6);
    \u0275\u0275element(23, "i", 7);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.no);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.kodeBarang);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.namaBarang);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.satuan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.saldoAwal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.masuk);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.keluar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.penyesuaian);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.saldoAkhir);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.stockOpname);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", item_r1.selisih === 0)("bg-danger", item_r1.selisih !== 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-check", item_r1.selisih === 0)("fa-xmark", item_r1.selisih !== 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.selisih, " ");
  }
}
var PositionReportComponent = class _PositionReportComponent {
  constructor() {
    this.items = [
      { no: 1, kodeBarang: "B700C1AB", namaBarang: "310 LITRE OXYGEN BOTTLE", satuan: "SET", saldoAwal: 50, masuk: 20, keluar: 10, penyesuaian: 0, saldoAkhir: 60, stockOpname: 60, selisih: 0 },
      { no: 2, kodeBarang: "BDM000015", namaBarang: "EASTMAN TURBO OIL 2197", satuan: "LTR", saldoAwal: 200, masuk: 80, keluar: 55, penyesuaian: -3, saldoAkhir: 222, stockOpname: 220, selisih: -2 }
    ];
  }
  static {
    this.\u0275fac = function PositionReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PositionReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PositionReportComponent, selectors: [["app-position-report"]], decls: 32, vars: 1, consts: [[1, "report-card"], [1, "card-header"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "text-success"], [1, "text-danger"], [1, "status-circle"], [1, "fa-solid"]], template: function PositionReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Laporan Posisi Barang - Gudang Berikat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2)(5, "table")(6, "thead")(7, "tr")(8, "th");
        \u0275\u0275text(9, "NO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "th");
        \u0275\u0275text(11, "KODE BARANG");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "NAMA BARANG");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "SATUAN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "SALDO AWAL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "MASUK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "KELUAR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "PENYESUAIAN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "SALDO AKHIR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "STOCK OPNAME");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "SELISIH");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "tbody");
        \u0275\u0275template(31, PositionReportComponent_tr_31_Template, 25, 19, "tr", 3);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(31);
        \u0275\u0275property("ngForOf", ctx.items);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.report-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n}\nth[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--text-muted);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border-color);\n}\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 500;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 500;\n}\n.status-circle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.7rem;\n  color: #fff;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n@media (max-width: 768px) {\n  .card-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  table[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n  }\n}\n@media (max-width: 480px) {\n  .card-header[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  table[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%] {\n    padding: 6px 6px;\n  }\n}\n/*# sourceMappingURL=position-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionReportComponent, [{
    type: Component,
    args: [{ selector: "app-position-report", standalone: true, imports: [CommonModule], template: '<div class="report-card">\n  <div class="card-header">\n    <h2>Laporan Posisi Barang - Gudang Berikat</h2>\n  </div>\n\n  <div class="table-container">\n    <table>\n      <thead>\n        <tr>\n          <th>NO</th>\n          <th>KODE BARANG</th>\n          <th>NAMA BARANG</th>\n          <th>SATUAN</th>\n          <th>SALDO AWAL</th>\n          <th>MASUK</th>\n          <th>KELUAR</th>\n          <th>PENYESUAIAN</th>\n          <th>SALDO AKHIR</th>\n          <th>STOCK OPNAME</th>\n          <th>SELISIH</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let item of items">\n          <td>{{item.no}}</td>\n          <td>{{item.kodeBarang}}</td>\n          <td>{{item.namaBarang}}</td>\n          <td>{{item.satuan}}</td>\n          <td>{{item.saldoAwal}}</td>\n          <td class="text-success">{{item.masuk}}</td>\n          <td class="text-danger">{{item.keluar}}</td>\n          <td>{{item.penyesuaian}}</td>\n          <td>{{item.saldoAkhir}}</td>\n          <td>{{item.stockOpname}}</td>\n          <td>\n            <span class="status-circle" [class.bg-success]="item.selisih === 0" [class.bg-danger]="item.selisih !== 0">\n              <i class="fa-solid" [class.fa-check]="item.selisih === 0" [class.fa-xmark]="item.selisih !== 0"></i>\n              {{item.selisih}}\n            </span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n', styles: ["/* src/app-frontend/pages/position-report/position-report.component.css */\n.report-card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.card-header {\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.card-header h2 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n}\nth {\n  background: #f8fafc;\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--text-muted);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border-color);\n}\ntd {\n  text-align: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.text-success {\n  color: #16a34a;\n  font-weight: 500;\n}\n.text-danger {\n  color: #dc2626;\n  font-weight: 500;\n}\n.status-circle {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.7rem;\n  color: #fff;\n}\n.bg-success {\n  background: #16a34a;\n}\n.bg-danger {\n  background: #dc2626;\n}\n@media (max-width: 768px) {\n  .card-header {\n    padding: 16px;\n  }\n  .card-header h2 {\n    font-size: 1rem;\n  }\n  table {\n    font-size: 0.72rem;\n  }\n  th,\n  td {\n    padding: 8px 10px;\n  }\n}\n@media (max-width: 480px) {\n  .card-header {\n    padding: 12px;\n  }\n  .card-header h2 {\n    font-size: 0.9rem;\n  }\n  table {\n    font-size: 0.65rem;\n  }\n  th,\n  td {\n    padding: 6px 6px;\n  }\n}\n/*# sourceMappingURL=position-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PositionReportComponent, { className: "PositionReportComponent", filePath: "src/app-frontend/pages/position-report/position-report.component.ts", lineNumber: 25 });
})();
export {
  PositionReportComponent
};
//# sourceMappingURL=chunk-H4JNNCVN.js.map
