import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BXD7PU4O.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/mutation-report/mutation-report.component.ts
function MutationReportComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "ul")(2, "li", 28);
    \u0275\u0275element(3, "i", 29);
    \u0275\u0275text(4, " PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 30);
    \u0275\u0275element(6, "i", 31);
    \u0275\u0275text(7, " Excel");
    \u0275\u0275elementEnd()()();
  }
}
function MutationReportComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 33);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 34);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 32);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 32);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 32);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
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
    \u0275\u0275textInterpolate(item_r1.jumlahBarang);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.saldoAwal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pemasukanBC23);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pemasukanBC27In);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.pengeluaranBC30);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.penyesuaian);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.saldoAkhir);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.hasilPencacahan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.jumlahSelisih);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.keterangan);
  }
}
var MutationReportComponent = class _MutationReportComponent {
  constructor() {
    this.showDownloadMenu = false;
    this.startDate = "";
    this.endDate = "";
    this.items = [
      { no: 1, kodeBarang: "QE54964", namaBarang: "MAIN WHEEL ASSEMBLY", satuan: "EA", jumlahBarang: 1, saldoAwal: 10, pemasukanBC23: 5, pemasukanBC27In: 0, pengeluaranBC30: 0, penyesuaian: 0, saldoAkhir: 15, hasilPencacahan: 15, jumlahSelisih: 0, keterangan: "Sesuai" },
      { no: 2, kodeBarang: "BDM000015", namaBarang: "EASTMAN TURBO OIL 2197", satuan: "LTR", jumlahBarang: 1, saldoAwal: 55, pemasukanBC23: 0, pemasukanBC27In: 0, pengeluaranBC30: 5, penyesuaian: 0, saldoAkhir: 50, hasilPencacahan: 50, jumlahSelisih: 0, keterangan: "Sesuai" },
      { no: 3, kodeBarang: "B700C1AB", namaBarang: "310 LITRE OXYGEN BOTTLE", satuan: "SET", jumlahBarang: 1, saldoAwal: 20, pemasukanBC23: 5, pemasukanBC27In: 5, pengeluaranBC30: 10, penyesuaian: 0, saldoAkhir: 20, hasilPencacahan: 20, jumlahSelisih: 0, keterangan: "Sesuai" }
    ];
  }
  toggleDownloadMenu() {
    this.showDownloadMenu = !this.showDownloadMenu;
  }
  applyDateFilter() {
    if (this.startDate && this.endDate) {
      console.log("Applying date filter:", this.startDate, "to", this.endDate);
    }
  }
  cancelDateFilter() {
    this.startDate = "";
    this.endDate = "";
    console.log("Date filter cancelled");
  }
  static {
    this.\u0275fac = function MutationReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MutationReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MutationReportComponent, selectors: [["app-mutation-report"]], decls: 66, vars: 7, consts: [[1, "report-card"], [1, "card-header"], [1, "header-actions"], [1, "date-range-wrapper"], ["type", "date", "title", "Start Date", 1, "date-input", 3, "ngModelChange", "ngModel"], [1, "separator"], ["type", "date", "title", "End Date", 1, "date-input", 3, "ngModelChange", "ngModel"], [1, "date-action-buttons"], [1, "btn-apply", 3, "click", "disabled"], [1, "fa-solid", "fa-check"], [1, "btn-cancel", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "search-box"], [1, "fa-solid", "fa-search", "search-icon"], ["type", "text", "placeholder", "Cari barang...", 1, "search-input"], [1, "dropdown-container"], [1, "btn-export", 3, "click"], [1, "fa-solid", "fa-cloud-arrow-down"], [1, "fa-solid", "fa-chevron-down", "sm-icon"], ["class", "dropdown-menu", 4, "ngIf"], [1, "table-container"], [1, "nested-header-table"], ["rowspan", "2"], ["colspan", "2", 1, "text-center", "parent-th"], ["colspan", "1", 1, "text-center", "parent-th"], [1, "sub-th"], [4, "ngFor", "ngForOf"], [1, "dropdown-menu"], [1, "opt-pdf"], [1, "fa-solid", "fa-file-pdf"], [1, "opt-excel"], [1, "fa-solid", "fa-file-excel"], [1, "text-center"], [1, "text-center", "text-success"], [1, "text-center", "text-danger"], [1, "text-center", "fw-bold"]], template: function MutationReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function MutationReportComponent_Template_input_ngModelChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function MutationReportComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
        \u0275\u0275listener("click", function MutationReportComponent_Template_button_click_9_listener() {
          return ctx.applyDateFilter();
        });
        \u0275\u0275element(10, "i", 9);
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "Apply");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275listener("click", function MutationReportComponent_Template_button_click_13_listener() {
          return ctx.cancelDateFilter();
        });
        \u0275\u0275element(14, "i", 11);
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16, "Batal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 12);
        \u0275\u0275element(18, "i", 13)(19, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 15)(21, "button", 16);
        \u0275\u0275listener("click", function MutationReportComponent_Template_button_click_21_listener() {
          return ctx.toggleDownloadMenu();
        });
        \u0275\u0275element(22, "i", 17);
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "Unduh");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, MutationReportComponent_div_26_Template, 8, 0, "div", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 20)(28, "table", 21)(29, "thead")(30, "tr")(31, "th", 22);
        \u0275\u0275text(32, "No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th", 22);
        \u0275\u0275text(34, "Kode Barang");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th", 22);
        \u0275\u0275text(36, "Nama Barang");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 22);
        \u0275\u0275text(38, "Satuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th", 22);
        \u0275\u0275text(40, "Jumlah Barang");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th", 22);
        \u0275\u0275text(42, "Saldo Awal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th", 23);
        \u0275\u0275text(44, "Pemasukan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th", 24);
        \u0275\u0275text(46, "Pengeluaran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th", 22);
        \u0275\u0275text(48, "Penyesuaian");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th", 22);
        \u0275\u0275text(50, "Saldo Akhir");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th", 22);
        \u0275\u0275text(52, "Hasil Pencacahan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th", 22);
        \u0275\u0275text(54, "Jumlah Selisih");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th", 22);
        \u0275\u0275text(56, "Keterangan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "tr")(58, "th", 25);
        \u0275\u0275text(59, "BC 2.3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th", 25);
        \u0275\u0275text(61, "BC 2.7In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th", 25);
        \u0275\u0275text(63, "BC 3.0");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "tbody");
        \u0275\u0275template(65, MutationReportComponent_tr_65_Template, 29, 14, "tr", 26);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.startDate || !ctx.endDate);
        \u0275\u0275advance(16);
        \u0275\u0275classProp("rotated", ctx.showDownloadMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDownloadMenu);
        \u0275\u0275advance(39);
        \u0275\u0275property("ngForOf", ctx.items);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.report-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n  white-space: nowrap;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.date-range-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 4px 12px;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.date-range-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #38bdf8;\n  box-shadow: 0 0 0 3px #e0f2fe;\n}\n.date-input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #475569;\n  font-size: 0.85rem;\n  font-family: inherit;\n  outline: none;\n  padding: 6px 0px;\n  cursor: pointer;\n}\n.separator[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.date-action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #0284c7);\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(2, 132, 199, 0.3);\n  font-family: inherit;\n}\n.btn-apply[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0284c7,\n      #0369a1);\n  box-shadow: 0 4px 8px rgba(2, 132, 199, 0.4);\n  transform: translateY(-1px);\n}\n.btn-apply[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(2, 132, 199, 0.3);\n}\n.btn-apply[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-apply[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  color: #64748b;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.btn-cancel[_ngcontent-%COMP%]:active {\n  background: #fee2e2;\n}\n.btn-cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px 12px 10px 36px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background-color: #f8fafc;\n  font-size: 0.85rem;\n  color: #334155;\n  transition: all 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #38bdf8;\n  background-color: #fff;\n  box-shadow: 0 0 0 3px #e0f2fe;\n}\n.btn-export[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  color: #334155;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.btn-export[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.btn-export[_ngcontent-%COMP%]   i.fa-cloud-arrow-down[_ngcontent-%COMP%] {\n  color: #0284c7;\n  font-size: 1.1rem;\n}\n.btn-export[_ngcontent-%COMP%]   .sm-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-left: 2px;\n  transition: transform 0.2s;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 8px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  padding: 6px;\n  width: 140px;\n  border: 1px solid #e2e8f0;\n  z-index: 100;\n  animation: _ngcontent-%COMP%_slideDown 0.15s ease-out;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 500;\n  border-radius: 6px;\n  transition: all 0.2s;\n  color: #475569;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.opt-pdf[_ngcontent-%COMP%]:hover {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.opt-pdf[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.opt-excel[_ngcontent-%COMP%]:hover {\n  background-color: #f0fdf4;\n  color: #16a34a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.opt-excel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 1rem;\n}\n.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding-bottom: 20px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.70rem;\n  white-space: nowrap;\n  table-layout: auto;\n}\nth[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  padding: 12px 10px;\n  text-align: center;\n  font-weight: 600;\n  color: #334155;\n  border: 1px solid #e2e8f0;\n  vertical-align: middle;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\nth.sub-th[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #f1f5f9;\n  color: #475569;\n}\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 12px 10px;\n  border: 1px solid #e2e8f0;\n  color: var(--text-main);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-color);\n}\n@media (max-width: 900px) {\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 200px;\n  }\n}\n@media (max-width: 768px) {\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 16px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .date-range-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .date-action-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .btn-export[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .card-header[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .date-range-wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .date-input[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 4px 0;\n  }\n  .btn-apply[_ngcontent-%COMP%], \n   .btn-cancel[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n  th[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 8px 6px;\n  }\n  td[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 8px 6px;\n  }\n}\n/*# sourceMappingURL=mutation-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationReportComponent, [{
    type: Component,
    args: [{ selector: "app-mutation-report", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="report-card">\n  <div class="card-header">\n    <div class="header-actions">\n      <!-- Date Range (Optimized) -->\n      <div class="date-range-wrapper">\n        <input type="date" class="date-input" [(ngModel)]="startDate" title="Start Date">\n        <span class="separator">to</span>\n        <input type="date" class="date-input" [(ngModel)]="endDate" title="End Date">\n      </div>\n\n      <!-- Date Action Buttons -->\n      <div class="date-action-buttons">\n        <button class="btn-apply" (click)="applyDateFilter()" [disabled]="!startDate || !endDate">\n          <i class="fa-solid fa-check"></i>\n          <span>Apply</span>\n        </button>\n        <button class="btn-cancel" (click)="cancelDateFilter()">\n          <i class="fa-solid fa-xmark"></i>\n          <span>Batal</span>\n        </button>\n      </div>\n\n      <!-- Search Box -->\n      <div class="search-box">\n        <i class="fa-solid fa-search search-icon"></i>\n        <input type="text" class="search-input" placeholder="Cari barang...">\n      </div>\n\n      <!-- Export Data Dropdown -->\n      <div class="dropdown-container">\n        <button class="btn-export" (click)="toggleDownloadMenu()">\n          <i class="fa-solid fa-cloud-arrow-down"></i>\n          <span>Unduh</span>\n          <i class="fa-solid fa-chevron-down sm-icon" [class.rotated]="showDownloadMenu"></i>\n        </button>\n        <div class="dropdown-menu" *ngIf="showDownloadMenu">\n          <ul>\n            <li class="opt-pdf"><i class="fa-solid fa-file-pdf"></i> PDF</li>\n            <li class="opt-excel"><i class="fa-solid fa-file-excel"></i> Excel</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="table-container">\n    <table class="nested-header-table">\n      <thead>\n        <tr>\n          <th rowspan="2">No.</th>\n          <th rowspan="2">Kode Barang</th>\n          <th rowspan="2">Nama Barang</th>\n          <th rowspan="2">Satuan</th>\n          <th rowspan="2">Jumlah Barang</th>\n          <th rowspan="2">Saldo Awal</th>\n          <th colspan="2" class="text-center parent-th">Pemasukan</th>\n          <th colspan="1" class="text-center parent-th">Pengeluaran</th>\n          <th rowspan="2">Penyesuaian</th>\n          <th rowspan="2">Saldo Akhir</th>\n          <th rowspan="2">Hasil Pencacahan</th>\n          <th rowspan="2">Jumlah Selisih</th>\n          <th rowspan="2">Keterangan</th>\n        </tr>\n        <tr>\n          <th class="sub-th">BC 2.3</th>\n          <th class="sub-th">BC 2.7In</th>\n          <th class="sub-th">BC 3.0</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let item of items">\n          <td class="text-center">{{item.no}}</td>\n          <td>{{item.kodeBarang}}</td>\n          <td>{{item.namaBarang}}</td>\n          <td class="text-center">{{item.satuan}}</td>\n          <td class="text-center">{{item.jumlahBarang}}</td>\n          <td class="text-center">{{item.saldoAwal}}</td>\n          <td class="text-center text-success">{{item.pemasukanBC23}}</td>\n          <td class="text-center text-success">{{item.pemasukanBC27In}}</td>\n          <td class="text-center text-danger">{{item.pengeluaranBC30}}</td>\n          <td class="text-center">{{item.penyesuaian}}</td>\n          <td class="text-center fw-bold">{{item.saldoAkhir}}</td>\n          <td class="text-center">{{item.hasilPencacahan}}</td>\n          <td class="text-center">{{item.jumlahSelisih}}</td>\n          <td>{{item.keterangan}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n', styles: ["/* src/app-frontend/pages/mutation-report/mutation-report.component.css */\n.report-card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.card-header {\n  padding: 24px;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.card-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n  white-space: nowrap;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.date-range-wrapper {\n  display: flex;\n  align-items: center;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 4px 12px;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.date-range-wrapper:focus-within {\n  border-color: #38bdf8;\n  box-shadow: 0 0 0 3px #e0f2fe;\n}\n.date-input {\n  border: none;\n  background: transparent;\n  color: #475569;\n  font-size: 0.85rem;\n  font-family: inherit;\n  outline: none;\n  padding: 6px 0px;\n  cursor: pointer;\n}\n.separator {\n  color: #94a3b8;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.date-action-buttons {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-apply {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #0284c7);\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(2, 132, 199, 0.3);\n  font-family: inherit;\n}\n.btn-apply:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0284c7,\n      #0369a1);\n  box-shadow: 0 4px 8px rgba(2, 132, 199, 0.4);\n  transform: translateY(-1px);\n}\n.btn-apply:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(2, 132, 199, 0.3);\n}\n.btn-apply:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-apply i {\n  font-size: 0.8rem;\n}\n.btn-cancel {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  color: #64748b;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.btn-cancel:hover {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.btn-cancel:active {\n  background: #fee2e2;\n}\n.btn-cancel i {\n  font-size: 0.8rem;\n}\n.search-box {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.search-box .search-icon {\n  position: absolute;\n  left: 12px;\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.search-input {\n  width: 200px;\n  padding: 10px 12px 10px 36px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background-color: #f8fafc;\n  font-size: 0.85rem;\n  color: #334155;\n  transition: all 0.2s;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #38bdf8;\n  background-color: #fff;\n  box-shadow: 0 0 0 3px #e0f2fe;\n}\n.btn-export {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  color: #334155;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.btn-export:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n}\n.btn-export i.fa-cloud-arrow-down {\n  color: #0284c7;\n  font-size: 1.1rem;\n}\n.btn-export .sm-icon {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-left: 2px;\n  transition: transform 0.2s;\n}\n.dropdown-container {\n  position: relative;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 8px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  padding: 6px;\n  width: 140px;\n  border: 1px solid #e2e8f0;\n  z-index: 100;\n  animation: slideDown 0.15s ease-out;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dropdown-menu li {\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 500;\n  border-radius: 6px;\n  transition: all 0.2s;\n  color: #475569;\n}\n.dropdown-menu li.opt-pdf:hover {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.dropdown-menu li.opt-pdf i {\n  color: #dc2626;\n  font-size: 1rem;\n}\n.dropdown-menu li.opt-excel:hover {\n  background-color: #f0fdf4;\n  color: #16a34a;\n}\n.dropdown-menu li.opt-excel i {\n  color: #16a34a;\n  font-size: 1rem;\n}\n.rotated {\n  transform: rotate(180deg);\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.table-container {\n  overflow-x: auto;\n  padding-bottom: 20px;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.70rem;\n  white-space: nowrap;\n  table-layout: auto;\n}\nth {\n  background-color: #f8fafc;\n  padding: 12px 10px;\n  text-align: center;\n  font-weight: 600;\n  color: #334155;\n  border: 1px solid #e2e8f0;\n  vertical-align: middle;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\nth.sub-th {\n  text-align: center;\n  background-color: #f1f5f9;\n  color: #475569;\n}\ntd {\n  text-align: center;\n  padding: 12px 10px;\n  border: 1px solid #e2e8f0;\n  color: var(--text-main);\n}\n.text-success {\n  color: #16a34a;\n  font-weight: 600;\n}\n.text-danger {\n  color: #dc2626;\n  font-weight: 600;\n}\n.text-center {\n  text-align: center;\n}\n.fw-bold {\n  font-weight: 700;\n  color: var(--primary-color);\n}\n@media (max-width: 900px) {\n  .header-actions {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .search-input {\n    width: 100%;\n    min-width: 200px;\n  }\n}\n@media (max-width: 768px) {\n  .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 16px;\n  }\n  .header-actions {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .date-range-wrapper {\n    width: 100%;\n  }\n  .date-action-buttons {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .search-box {\n    width: 100%;\n    margin-left: 0;\n  }\n  .search-input {\n    width: 100%;\n  }\n  .btn-export {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .card-header {\n    padding: 12px;\n  }\n  .card-title {\n    font-size: 1rem;\n  }\n  .date-range-wrapper {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .date-input {\n    font-size: 0.8rem;\n    padding: 4px 0;\n  }\n  .btn-apply,\n  .btn-cancel {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n  th {\n    font-size: 0.6rem;\n    padding: 8px 6px;\n  }\n  td {\n    font-size: 0.65rem;\n    padding: 8px 6px;\n  }\n}\n/*# sourceMappingURL=mutation-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MutationReportComponent, { className: "MutationReportComponent", filePath: "src/app-frontend/pages/mutation-report/mutation-report.component.ts", lineNumber: 29 });
})();
export {
  MutationReportComponent
};
//# sourceMappingURL=chunk-NLMV4LKD.js.map
