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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/outward-report/outward-report.component.ts
function OutwardReportComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "ul")(2, "li", 27);
    \u0275\u0275listener("click", function OutwardReportComponent_div_8_Template_li_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("Semua Jenis Dokumen"));
    });
    \u0275\u0275text(3, "Semua Jenis Dokumen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "li", 27);
    \u0275\u0275listener("click", function OutwardReportComponent_div_8_Template_li_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("BC 3.0"));
    });
    \u0275\u0275text(5, "BC 3.0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li", 27);
    \u0275\u0275listener("click", function OutwardReportComponent_div_8_Template_li_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("BC 4.0"));
    });
    \u0275\u0275text(7, "BC 4.0");
    \u0275\u0275elementEnd()()();
  }
}
function OutwardReportComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "ul")(2, "li", 28);
    \u0275\u0275element(3, "i", 29);
    \u0275\u0275text(4, " PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 30);
    \u0275\u0275element(6, "i", 31);
    \u0275\u0275text(7, " Excel");
    \u0275\u0275elementEnd()()();
  }
}
function OutwardReportComponent_tr_83_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, " Belum ada ");
    \u0275\u0275elementEnd();
  }
}
function OutwardReportComponent_tr_83_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2, " PDF ");
    \u0275\u0275elementEnd();
  }
}
function OutwardReportComponent_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
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
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275template(32, OutwardReportComponent_tr_83_span_32_Template, 3, 0, "span", 33)(33, OutwardReportComponent_tr_83_span_33_Template, 3, 0, "span", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.no);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.nomorPengeluaran);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.batchNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.jenis);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.nomorDaftar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.tanggalDaftar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.penerima);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.namaPemilik);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.kodeBarang);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.namaBarang);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.satuan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.jumlah);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.valuta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.nilaiBarang);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r3.scanStatus === "Belum ada");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.scanStatus === "PDF");
  }
}
function OutwardReportComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "ul")(2, "li", 27);
    \u0275\u0275listener("click", function OutwardReportComponent_div_91_Template_li_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPageSize(10));
    });
    \u0275\u0275text(3, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "li", 27);
    \u0275\u0275listener("click", function OutwardReportComponent_div_91_Template_li_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPageSize(25));
    });
    \u0275\u0275text(5, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li", 27);
    \u0275\u0275listener("click", function OutwardReportComponent_div_91_Template_li_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPageSize(50));
    });
    \u0275\u0275text(7, "50");
    \u0275\u0275elementEnd()()();
  }
}
var OutwardReportComponent = class _OutwardReportComponent {
  constructor() {
    this.showDownloadMenu = false;
    this.showFilterMenu = false;
    this.showPageMenu = false;
    this.pageSize = 10;
    this.activeFilter = "Semua Jenis Dokumen";
    this.items = [
      { no: 1, nomorPengeluaran: "0001/GMF/20260202", batchNumber: "000001", jenis: "40", nomorDaftar: "OUT0001", tanggalDaftar: "02-02-2026", penerima: "SINGAPORE AIRLINES", namaPemilik: "SINGAPORE AIRLINES", kodeBarang: "9700322", namaBarang: "OXYGEN BOTTLE", satuan: "SET", jumlah: 4, valuta: "USD", nilaiBarang: "12,500,000", scanStatus: "Belum ada" },
      { no: 2, nomorPengeluaran: "0002/GMF/20260201", batchNumber: "000002", jenis: "30", nomorDaftar: "OUT0002", tanggalDaftar: "01-02-2026", penerima: "CATHAY PACIFIC", namaPemilik: "CATHAY PACIFIC", kodeBarang: "96M0015", namaBarang: "TURBO OIL", satuan: "LTR", jumlah: 44, valuta: "USD", nilaiBarang: "9,000,000", scanStatus: "Belum ada" },
      { no: 3, nomorPengeluaran: "0003/GMF/20260131", batchNumber: "000003", jenis: "30", nomorDaftar: "OUT0003", tanggalDaftar: "31-01-2026", penerima: "GARUDA INDONESIA", namaPemilik: "GARUDA INDONESIA", kodeBarang: "B003902E", namaBarang: "WATER FINDING PASTE", satuan: "KG", jumlah: 40, valuta: "USD", nilaiBarang: "20,000,000", scanStatus: "PDF" }
    ];
    this.globalSearch = "";
    this.colSearch = {
      nomorPengeluaran: "",
      batchNumber: "",
      jenis: "",
      nomorDaftar: "",
      tanggalDaftar: "",
      penerima: "",
      namaPemilik: "",
      kodeBarang: "",
      namaBarang: "",
      satuan: "",
      jumlah: "",
      valuta: "",
      nilaiBarang: ""
    };
  }
  toggleDownloadMenu() {
    this.showDownloadMenu = !this.showDownloadMenu;
    this.showFilterMenu = false;
    this.showPageMenu = false;
  }
  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
    this.showDownloadMenu = false;
    this.showPageMenu = false;
  }
  togglePageMenu() {
    this.showPageMenu = !this.showPageMenu;
    this.showDownloadMenu = false;
    this.showFilterMenu = false;
  }
  setFilter(filter) {
    this.activeFilter = filter;
    this.showFilterMenu = false;
  }
  setPageSize(size) {
    this.pageSize = size;
    this.showPageMenu = false;
  }
  get filteredItems() {
    return this.items.filter((item) => {
      if (this.activeFilter !== "Semua Jenis Dokumen" && item.jenis !== this.activeFilter.replace("BC ", ""))
        return false;
      if (this.globalSearch) {
        const term = this.globalSearch.toLowerCase();
        const matchGlobal = Object.values(item).some((val) => val && val.toString().toLowerCase().includes(term));
        if (!matchGlobal)
          return false;
      }
      for (const key in this.colSearch) {
        if (this.colSearch[key]) {
          const term = this.colSearch[key].toLowerCase();
          const itemVal = item[key];
          if (!itemVal || !itemVal.toString().toLowerCase().includes(term)) {
            return false;
          }
        }
      }
      return true;
    });
  }
  static {
    this.\u0275fac = function OutwardReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OutwardReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutwardReportComponent, selectors: [["app-outward-report"]], decls: 108, vars: 26, consts: [[1, "report-header"], [1, "filters"], [1, "dropdown-container"], [1, "filter-item", 3, "click"], [1, "fa-solid", "fa-filter"], [1, "fa-solid", "fa-angle-down"], ["class", "dropdown-menu", "style", "margin-top:2px;", 4, "ngIf"], [1, "actions"], [1, "search-box"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], [1, "btn-download", 3, "click"], [1, "fa-solid", "fa-download"], [1, "table-container"], [1, "col-search"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "page-size"], [1, "dropdown-container", "inline-drop"], [1, "custom-select-trigger", 3, "click"], ["class", "dropdown-menu page-menu", 4, "ngIf"], [1, "page-controls"], [1, "p-btn"], [1, "fa-solid", "fa-angle-left"], [1, "p-btn", "active"], [1, "fa-solid", "fa-angle-right"], [1, "dropdown-menu", 2, "margin-top", "2px"], [3, "click"], [1, "opt-pdf"], [1, "fa-solid", "fa-file-pdf"], [1, "opt-excel"], [1, "fa-solid", "fa-file-excel"], [1, "badge", "badge-red"], ["class", "status-tag not-ready", 4, "ngIf"], ["class", "status-tag badge-pdf", 4, "ngIf"], [1, "status-tag", "not-ready"], [1, "fa-solid", "fa-circle-dot", "alert-icon"], [1, "status-tag", "badge-pdf"], [1, "dropdown-menu", "page-menu"]], template: function OutwardReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275listener("click", function OutwardReportComponent_Template_div_click_3_listener() {
          return ctx.toggleFilterMenu();
        });
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, OutwardReportComponent_div_8_Template, 8, 0, "div", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
        \u0275\u0275element(11, "i", 9);
        \u0275\u0275elementStart(12, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.globalSearch, $event) || (ctx.globalSearch = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 2)(14, "button", 11);
        \u0275\u0275listener("click", function OutwardReportComponent_Template_button_click_14_listener() {
          return ctx.toggleDownloadMenu();
        });
        \u0275\u0275element(15, "i", 12);
        \u0275\u0275text(16, " Unduh Dokumen ");
        \u0275\u0275element(17, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, OutwardReportComponent_div_18_Template, 8, 0, "div", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 13)(20, "table")(21, "thead")(22, "tr")(23, "th");
        \u0275\u0275text(24, "NO.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "NOMOR PENGELUARAN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28, "BATCH NUMBER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "JENIS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "NOMOR DAFTAR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "TANGGAL DAFTAR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "PENERIMA BARANG");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "NAMA PEMILIK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "KODE BARANG");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "NAMA BARANG");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "SAT.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "JML.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "VALUTA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "NILAI BARANG");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "SCAN DOKUMEN");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "tr");
        \u0275\u0275element(54, "th", 14);
        \u0275\u0275elementStart(55, "th", 14)(56, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_56_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.nomorPengeluaran, $event) || (ctx.colSearch.nomorPengeluaran = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "th", 14)(58, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_58_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.batchNumber, $event) || (ctx.colSearch.batchNumber = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "th", 14)(60, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_60_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.jenis, $event) || (ctx.colSearch.jenis = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "th", 14)(62, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.nomorDaftar, $event) || (ctx.colSearch.nomorDaftar = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "th", 14)(64, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_64_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.tanggalDaftar, $event) || (ctx.colSearch.tanggalDaftar = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "th", 14)(66, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_66_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.penerima, $event) || (ctx.colSearch.penerima = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "th", 14)(68, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.namaPemilik, $event) || (ctx.colSearch.namaPemilik = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "th", 14)(70, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_70_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.kodeBarang, $event) || (ctx.colSearch.kodeBarang = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "th", 14)(72, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_72_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.namaBarang, $event) || (ctx.colSearch.namaBarang = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "th", 14)(74, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_74_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.satuan, $event) || (ctx.colSearch.satuan = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "th", 14)(76, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_76_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.jumlah, $event) || (ctx.colSearch.jumlah = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "th", 14)(78, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_78_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.valuta, $event) || (ctx.colSearch.valuta = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "th", 14)(80, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OutwardReportComponent_Template_input_ngModelChange_80_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.nilaiBarang, $event) || (ctx.colSearch.nilaiBarang = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(81, "th", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "tbody");
        \u0275\u0275template(83, OutwardReportComponent_tr_83_Template, 34, 16, "tr", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 16)(85, "div", 17);
        \u0275\u0275text(86, " Lihat per ");
        \u0275\u0275elementStart(87, "div", 18)(88, "div", 19);
        \u0275\u0275listener("click", function OutwardReportComponent_Template_div_click_88_listener() {
          return ctx.togglePageMenu();
        });
        \u0275\u0275text(89);
        \u0275\u0275element(90, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(91, OutwardReportComponent_div_91_Template, 8, 0, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, " baris ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 21)(94, "button", 22);
        \u0275\u0275element(95, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "button", 24);
        \u0275\u0275text(97, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "button", 22);
        \u0275\u0275text(99, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "button", 22);
        \u0275\u0275text(101, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "button", 22);
        \u0275\u0275text(103, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "button", 22);
        \u0275\u0275text(105, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "button", 22);
        \u0275\u0275element(107, "i", 25);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.activeFilter);
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showFilterMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showFilterMenu);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.globalSearch);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("rotated", ctx.showDownloadMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDownloadMenu);
        \u0275\u0275advance(38);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.nomorPengeluaran);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.batchNumber);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.jenis);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.nomorDaftar);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.tanggalDaftar);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.penerima);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.namaPemilik);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.kodeBarang);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.namaBarang);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.satuan);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.jumlah);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.valuta);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.nilaiBarang);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.filteredItems);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.pageSize, " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showPageMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPageMenu);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.report-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.filters[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  padding: 8px 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.filters[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 10px 10px 36px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background-color: #fff;\n  font-size: 0.9rem;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.btn-download[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid var(--border-color);\n  background: #fff;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  color: var(--text-main);\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n.btn-download[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 4px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  padding: 8px;\n  width: max-content;\n  min-width: 120px;\n  max-width: 200px;\n  border: 1px solid var(--border-color);\n  z-index: 200;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.2s;\n  color: var(--text-main);\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.opt-pdf[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.opt-pdf[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1.1rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.opt-excel[_ngcontent-%COMP%]:hover {\n  background-color: #dcfce7;\n  color: #16a34a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.opt-excel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 1.1rem;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.table-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  overflow-x: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.65rem;\n  white-space: normal;\n  table-layout: auto;\n}\nth[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  padding: 12px 10px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border-color);\n  font-size: 0.65rem;\n}\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 10px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--text-main);\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #4b5563;\n}\n.status-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 4px;\n  padding: 6px 8px;\n  border-radius: 6px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  border: 1px solid transparent;\n  width: max-content;\n  min-width: 85px;\n  white-space: nowrap;\n}\n.status-tag.not-ready[_ngcontent-%COMP%] {\n  background-color: #fef08a;\n  color: #a16207;\n  border-color: #fde047;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  color: #ca8a04;\n}\n.status-tag.badge-pdf[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n  border-color: #fca5a5;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.inline-drop[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 4px;\n}\n.page-menu[_ngcontent-%COMP%] {\n  top: 100%;\n  bottom: auto;\n  margin-top: 4px;\n  width: 100% !important;\n  min-width: 100% !important;\n  max-width: 100% !important;\n  left: 0;\n  right: auto;\n  padding: 4px 0;\n  border-radius: 8px !important;\n}\n.page-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 0 !important;\n  justify-content: center !important;\n  font-size: 0.85rem !important;\n  border-radius: 4px !important;\n  gap: 0 !important;\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px;\n  border: 1px solid #0ea5e9;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: #0ea5e9;\n  width: auto;\n  min-width: unset;\n}\n.custom-select-trigger[_ngcontent-%COMP%]:hover {\n  background-color: #f0f9ff;\n  border-color: var(--primary-color);\n}\n.custom-select-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n  font-size: 0.75rem;\n}\n.pagination[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n}\n.page-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.p-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.p-btn.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: #fff;\n  border-color: var(--primary-color);\n}\n@media (max-width: 1024px) {\n  .report-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: center;\n  }\n  .filters[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 480px) {\n  .btn-download[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .page-controls[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=outward-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OutwardReportComponent, [{
    type: Component,
    args: [{ selector: "app-outward-report", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="report-header">
  <div class="filters">
    <div class="dropdown-container">
      <div class="filter-item" (click)="toggleFilterMenu()">
        <i class="fa-solid fa-filter"></i>
        <span>{{activeFilter}}</span>
        <i class="fa-solid fa-angle-down" [class.rotated]="showFilterMenu"></i>
      </div>
      <div class="dropdown-menu" *ngIf="showFilterMenu" style="margin-top:2px;">
        <ul>
          <li (click)="setFilter('Semua Jenis Dokumen')">Semua Jenis Dokumen</li>
          <li (click)="setFilter('BC 3.0')">BC 3.0</li>
          <li (click)="setFilter('BC 4.0')">BC 4.0</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="actions">
    <div class="search-box">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search..." [(ngModel)]="globalSearch">
    </div>
    <div class="dropdown-container">
      <button class="btn-download" (click)="toggleDownloadMenu()">
        <i class="fa-solid fa-download"></i>
        Unduh Dokumen
        <i class="fa-solid fa-angle-down" [class.rotated]="showDownloadMenu"></i>
      </button>
      <div class="dropdown-menu" *ngIf="showDownloadMenu" style="margin-top:2px;">
        <ul>
          <li class="opt-pdf"><i class="fa-solid fa-file-pdf"></i> PDF</li>
          <li class="opt-excel"><i class="fa-solid fa-file-excel"></i> Excel</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>NO.</th>
        <th>NOMOR PENGELUARAN</th>
        <th>BATCH NUMBER</th>
        <th>JENIS</th>
        <th>NOMOR DAFTAR</th>
        <th>TANGGAL DAFTAR</th>
        <th>PENERIMA BARANG</th>
        <th>NAMA PEMILIK</th>
        <th>KODE BARANG</th>
        <th>NAMA BARANG</th>
        <th>SAT.</th>
        <th>JML.</th>
        <th>VALUTA</th>
        <th>NILAI BARANG</th>
        <th>SCAN DOKUMEN</th>
      </tr>
      <tr>
        <th class="col-search"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.nomorPengeluaran"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.batchNumber"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.jenis"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.nomorDaftar"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.tanggalDaftar"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.penerima"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.namaPemilik"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.kodeBarang"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.namaBarang"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.satuan"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.jumlah"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.valuta"></th>
        <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.nilaiBarang"></th>
        <th class="col-search"></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of filteredItems">
        <td>{{item.no}}</td>
        <td><strong>{{item.nomorPengeluaran}}</strong></td>
        <td>{{item.batchNumber}}</td>
        <td><span class="badge badge-red">{{item.jenis}}</span></td>
        <td>{{item.nomorDaftar}}</td>
        <td>{{item.tanggalDaftar}}</td>
        <td>{{item.penerima}}</td>
        <td>{{item.namaPemilik}}</td>
        <td>{{item.kodeBarang}}</td>
        <td>{{item.namaBarang}}</td>
        <td>{{item.satuan}}</td>
        <td>{{item.jumlah}}</td>
        <td>{{item.valuta}}</td>
        <td>{{item.nilaiBarang}}</td>
        <td>
          <span class="status-tag not-ready" *ngIf="item.scanStatus === 'Belum ada'">
             <i class="fa-solid fa-circle-dot alert-icon"></i> Belum ada
          </span>
          <span class="status-tag badge-pdf" *ngIf="item.scanStatus === 'PDF'">
             <i class="fa-solid fa-file-pdf"></i> PDF
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="pagination">
  <div class="page-size">
    Lihat per 
    <div class="dropdown-container inline-drop">
      <div class="custom-select-trigger" (click)="togglePageMenu()">
        {{pageSize}} <i class="fa-solid fa-angle-down" [class.rotated]="showPageMenu"></i>
      </div>
      <div class="dropdown-menu page-menu" *ngIf="showPageMenu">
        <ul>
          <li (click)="setPageSize(10)">10</li>
          <li (click)="setPageSize(25)">25</li>
          <li (click)="setPageSize(50)">50</li>
        </ul>
      </div>
    </div>
    baris
  </div>
  <div class="page-controls">
    <button class="p-btn"><i class="fa-solid fa-angle-left"></i></button>
    <button class="p-btn active">1</button>
    <button class="p-btn">2</button>
    <button class="p-btn">3</button>
    <button class="p-btn">4</button>
    <button class="p-btn">5</button>
    <button class="p-btn"><i class="fa-solid fa-angle-right"></i></button>
  </div>
</div>
`, styles: ["/* src/app-frontend/pages/outward-report/outward-report.component.css */\n.report-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.filters {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  padding: 8px 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.filters i:first-child {\n  color: var(--text-muted);\n}\n.actions {\n  display: flex;\n  gap: 16px;\n}\n.search-box {\n  position: relative;\n  width: 300px;\n}\n.search-box i {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n}\n.search-box input {\n  width: 100%;\n  padding: 10px 10px 10px 36px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background-color: #fff;\n  font-size: 0.9rem;\n}\n.dropdown-container {\n  position: relative;\n}\n.btn-download {\n  padding: 10px 16px;\n  border: 1px solid var(--border-color);\n  background: #fff;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  color: var(--text-main);\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n.btn-download:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 4px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  padding: 8px;\n  width: max-content;\n  min-width: 120px;\n  max-width: 200px;\n  border: 1px solid var(--border-color);\n  z-index: 200;\n  animation: slideDown 0.2s ease-out;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dropdown-menu li {\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.2s;\n  color: var(--text-main);\n}\n.dropdown-menu li.opt-pdf:hover {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.dropdown-menu li.opt-pdf i {\n  color: #dc2626;\n  font-size: 1.1rem;\n}\n.dropdown-menu li.opt-excel:hover {\n  background-color: #dcfce7;\n  color: #16a34a;\n}\n.dropdown-menu li.opt-excel i {\n  color: #16a34a;\n  font-size: 1.1rem;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.table-container {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  overflow-x: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.65rem;\n  white-space: normal;\n  table-layout: auto;\n}\nth {\n  background-color: #f8fafc;\n  padding: 12px 10px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border-color);\n  font-size: 0.65rem;\n}\ntd {\n  text-align: center;\n  padding: 16px 10px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--text-main);\n}\n.badge {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge-red {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.badge-gray {\n  background-color: #f3f4f6;\n  color: #4b5563;\n}\n.status-tag {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 4px;\n  padding: 6px 8px;\n  border-radius: 6px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  border: 1px solid transparent;\n  width: max-content;\n  min-width: 85px;\n  white-space: nowrap;\n}\n.status-tag.not-ready {\n  background-color: #fef08a;\n  color: #a16207;\n  border-color: #fde047;\n}\n.alert-icon {\n  color: #ca8a04;\n}\n.status-tag.badge-pdf {\n  background-color: #fee2e2;\n  color: #dc2626;\n  border-color: #fca5a5;\n}\n.text-muted {\n  color: #94a3b8;\n}\n.inline-drop {\n  display: inline-block;\n  margin: 0 4px;\n}\n.page-menu {\n  top: 100%;\n  bottom: auto;\n  margin-top: 4px;\n  width: 100% !important;\n  min-width: 100% !important;\n  max-width: 100% !important;\n  left: 0;\n  right: auto;\n  padding: 4px 0;\n  border-radius: 8px !important;\n}\n.page-menu li {\n  padding: 8px 0 !important;\n  justify-content: center !important;\n  font-size: 0.85rem !important;\n  border-radius: 4px !important;\n  gap: 0 !important;\n}\n.custom-select-trigger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px;\n  border: 1px solid #0ea5e9;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: #0ea5e9;\n  width: auto;\n  min-width: unset;\n}\n.custom-select-trigger:hover {\n  background-color: #f0f9ff;\n  border-color: var(--primary-color);\n}\n.custom-select-trigger i {\n  color: #0ea5e9;\n  font-size: 0.75rem;\n}\n.pagination {\n  margin-top: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n}\n.page-controls {\n  display: flex;\n  gap: 8px;\n}\n.p-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.p-btn.active {\n  background-color: var(--primary-color);\n  color: #fff;\n  border-color: var(--primary-color);\n}\n@media (max-width: 1024px) {\n  .report-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .actions {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .search-box {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .actions {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .search-box {\n    width: 100%;\n  }\n  .pagination {\n    flex-direction: column;\n    gap: 12px;\n    align-items: center;\n  }\n  .filters {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 480px) {\n  .btn-download {\n    width: 100%;\n    justify-content: center;\n  }\n  .page-controls {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=outward-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutwardReportComponent, { className: "OutwardReportComponent", filePath: "src/app-frontend/pages/outward-report/outward-report.component.ts", lineNumber: 30 });
})();
export {
  OutwardReportComponent
};
//# sourceMappingURL=chunk-S3VSATBY.js.map
