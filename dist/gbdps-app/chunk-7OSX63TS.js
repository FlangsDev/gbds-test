import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BXD7PU4O.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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

// src/app-frontend/pages/history/history.component.ts
function HistoryComponent_div_29_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26);
    \u0275\u0275listener("click", function HistoryComponent_div_29_li_4_Template_li_click_0_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setCategory(c_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active-opt", ctx_r1.filterCategory === c_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
  }
}
function HistoryComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "ul")(2, "li", 26);
    \u0275\u0275listener("click", function HistoryComponent_div_29_Template_li_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategory(""));
    });
    \u0275\u0275text(3, "Semua Kategori");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HistoryComponent_div_29_li_4_Template, 2, 3, "li", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active-opt", ctx_r1.filterCategory === "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function HistoryComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function HistoryComponent_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterDate = "");
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementEnd();
  }
}
function HistoryComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34)(5, "div", 35)(6, "span", 36);
    \u0275\u0275element(7, "i", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 38);
    \u0275\u0275element(12, "i", 39);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 41)(18, "span");
    \u0275\u0275element(19, "i", 42);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275element(22, "i", 43);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const log_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getActionIcon(log_r6.action));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.getActionIcon(log_r6.action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r6.module, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r6.action);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 10, log_r6.timestamp, "dd MMM yyyy, HH:mm:ss"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r6.detail);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", log_r6.user, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", log_r6.ipAddress, "");
  }
}
function HistoryComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Tidak ada aktivitas yang sesuai filter");
    \u0275\u0275elementEnd()();
  }
}
var HistoryComponent = class _HistoryComponent {
  constructor() {
    this.searchQuery = "";
    this.filterCategory = "";
    this.filterDate = "";
    this.showCategoryMenu = false;
    this.categories = [
      "Upload BC",
      "Upload Scan",
      "Good Receipt",
      "Good Issue",
      "Adjustment",
      "Stock Opname",
      "Login",
      "Laporan Pemasukan Barang",
      "Laporan Pengeluaran Barang",
      "Laporan Mutasi Barang"
    ];
    this.logs = [
      { id: 1, timestamp: /* @__PURE__ */ new Date("2026-03-10T10:55:00"), user: "Admin", action: "Upload", module: "Upload BC", detail: "Upload file BC_2.0_Maret2026.xlsx berhasil (48 records)", ipAddress: "192.168.1.10" },
      { id: 2, timestamp: /* @__PURE__ */ new Date("2026-03-10T10:48:20"), user: "Admin", action: "Submit", module: "Good Receipt", detail: "GR #GR-2026-0312 dicatat untuk Part QE54964", ipAddress: "192.168.1.10" },
      { id: 3, timestamp: /* @__PURE__ */ new Date("2026-03-10T10:30:10"), user: "Admin", action: "Submit", module: "Adjustment", detail: "Adjustment BC 2.0 No.Daftar 001/BC2.0/2024 - Qty: -3", ipAddress: "192.168.1.10" },
      { id: 4, timestamp: /* @__PURE__ */ new Date("2026-03-10T10:12:05"), user: "Admin", action: "Upload", module: "Upload Scan", detail: "Upload scan dokumen DOC-2026-031.pdf berhasil", ipAddress: "192.168.1.10" },
      { id: 5, timestamp: /* @__PURE__ */ new Date("2026-03-10T09:55:44"), user: "Admin", action: "Submit", module: "Good Issue", detail: "GI #GI-2026-0218 dicatat untuk Part BDM000015", ipAddress: "192.168.1.10" },
      { id: 6, timestamp: /* @__PURE__ */ new Date("2026-03-10T09:40:30"), user: "Admin", action: "Export", module: "Laporan Mutasi Barang", detail: "Unduh Laporan Mutasi Barang format Excel - Maret 2026", ipAddress: "192.168.1.10" },
      { id: 7, timestamp: /* @__PURE__ */ new Date("2026-03-10T09:35:10"), user: "Admin", action: "Export", module: "Laporan Mutasi Barang", detail: "Unduh Laporan Mutasi Barang format PDF - Maret 2026", ipAddress: "192.168.1.10" },
      { id: 8, timestamp: /* @__PURE__ */ new Date("2026-03-10T09:22:18"), user: "Admin", action: "Submit", module: "Stock Opname", detail: "Stock Opname Q1-2026 disimpan - 3 item selisih terdeteksi", ipAddress: "192.168.1.10" },
      { id: 9, timestamp: /* @__PURE__ */ new Date("2026-03-10T08:31:00"), user: "Admin", action: "Login", module: "Login", detail: "Berhasil login ke sistem GBDPS-APP", ipAddress: "192.168.1.10" },
      { id: 10, timestamp: /* @__PURE__ */ new Date("2026-03-09T16:05:22"), user: "Admin", action: "Upload", module: "Upload BC", detail: "Upload gagal: format file tidak sesuai (BC_Feb.xls)", ipAddress: "192.168.1.10" },
      { id: 11, timestamp: /* @__PURE__ */ new Date("2026-03-09T15:47:10"), user: "Admin", action: "Submit", module: "Good Receipt", detail: "GR #GR-2026-0311 dicatat untuk Part B700C1AB", ipAddress: "192.168.1.10" },
      { id: 12, timestamp: /* @__PURE__ */ new Date("2026-03-09T14:30:00"), user: "Admin", action: "Export", module: "Laporan Pemasukan Barang", detail: "Unduh Laporan Pemasukan Barang format PDF - Feb 2026", ipAddress: "192.168.1.10" },
      { id: 13, timestamp: /* @__PURE__ */ new Date("2026-03-09T14:15:00"), user: "Admin", action: "Export", module: "Laporan Pemasukan Barang", detail: "Unduh Laporan Pemasukan Barang format Excel - Feb 2026", ipAddress: "192.168.1.10" },
      { id: 14, timestamp: /* @__PURE__ */ new Date("2026-03-09T13:15:55"), user: "Admin", action: "Submit", module: "Good Issue", detail: "GI #GI-2026-0217 dicatat untuk Part QE54964", ipAddress: "192.168.1.10" },
      { id: 15, timestamp: /* @__PURE__ */ new Date("2026-03-09T11:05:30"), user: "Admin", action: "Export", module: "Laporan Pengeluaran Barang", detail: "Unduh Laporan Pengeluaran Barang format PDF - Feb 2026", ipAddress: "192.168.1.10" },
      { id: 16, timestamp: /* @__PURE__ */ new Date("2026-03-09T10:50:00"), user: "Admin", action: "Export", module: "Laporan Pengeluaran Barang", detail: "Unduh Laporan Pengeluaran Barang format Excel - Feb 2026", ipAddress: "192.168.1.10" }
    ];
  }
  get filteredLogs() {
    return this.logs.filter((log) => {
      const matchSearch = !this.searchQuery || log.detail.toLowerCase().includes(this.searchQuery.toLowerCase()) || log.action.toLowerCase().includes(this.searchQuery.toLowerCase()) || log.module.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchCat = !this.filterCategory || log.module === this.filterCategory;
      const matchDate = !this.filterDate || log.timestamp.toISOString().startsWith(this.filterDate);
      return matchSearch && matchCat && matchDate;
    });
  }
  toggleCategoryMenu() {
    this.showCategoryMenu = !this.showCategoryMenu;
  }
  setCategory(val) {
    this.filterCategory = val;
    this.showCategoryMenu = false;
  }
  getActionIcon(action) {
    const icons = {
      Upload: "fa-cloud-arrow-up",
      Submit: "fa-floppy-disk",
      Export: "fa-file-arrow-down",
      Login: "fa-right-to-bracket"
    };
    return icons[action] ?? "fa-clock-rotate-left";
  }
  countByModule() {
    return new Set(this.logs.map((l) => l.module)).size;
  }
  static {
    this.\u0275fac = function HistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryComponent, selectors: [["app-history"]], decls: 37, vars: 13, consts: [[1, "history-card"], [1, "card-header"], [1, "header-left"], [1, "fa-solid", "fa-clock-rotate-left"], [1, "header-stats"], [1, "mini-stat"], [1, "mini-val", "total"], [1, "mini-lbl"], [1, "mini-val", "module"], [1, "filters-bar"], [1, "search-box"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Cari aktivitas...", 3, "ngModelChange", "ngModel"], [1, "filter-selects"], [1, "dropdown-container"], [1, "custom-select-trigger", 3, "click"], [1, "fa-solid", "fa-angle-down"], ["class", "dropdown-menu scrollable-menu", 4, "ngIf"], [1, "date-filter-wrap"], [1, "fa-regular", "fa-calendar"], ["type", "date", 1, "date-input", 3, "ngModelChange", "ngModel"], ["class", "btn-clear-date", "title", "Reset tanggal", 3, "click", 4, "ngIf"], [1, "log-timeline"], ["class", "log-entry", 4, "ngFor", "ngForOf"], ["class", "empty-log", 4, "ngIf"], [1, "dropdown-menu", "scrollable-menu"], [3, "click"], [3, "active-opt", "click", 4, "ngFor", "ngForOf"], ["title", "Reset tanggal", 1, "btn-clear-date", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "log-entry"], [1, "log-dot", "dot-action"], [1, "fa-solid"], [1, "log-content"], [1, "log-top"], [1, "log-badges"], [1, "badge-module"], [1, "badge-action"], [1, "log-time"], [1, "fa-regular", "fa-clock"], [1, "log-detail"], [1, "log-meta"], [1, "fa-solid", "fa-user"], [1, "fa-solid", "fa-network-wired"], [1, "empty-log"], [1, "fa-solid", "fa-magnifying-glass"]], template: function HistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275element(4, "i", 3);
        \u0275\u0275text(5, " Activity Log");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Rekam jejak seluruh aktivitas pengguna dalam sistem");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "span", 6);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 7);
        \u0275\u0275text(13, "Total Aktivitas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5)(15, "span", 8);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 7);
        \u0275\u0275text(18, "Modul Aktif");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 9)(20, "div", 10);
        \u0275\u0275element(21, "i", 11);
        \u0275\u0275elementStart(22, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function HistoryComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 14)(25, "div", 15);
        \u0275\u0275listener("click", function HistoryComponent_Template_div_click_25_listener() {
          return ctx.toggleCategoryMenu();
        });
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, HistoryComponent_div_29_Template, 5, 3, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18);
        \u0275\u0275element(31, "i", 19);
        \u0275\u0275elementStart(32, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function HistoryComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterDate, $event) || (ctx.filterDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, HistoryComponent_button_33_Template, 2, 0, "button", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 22);
        \u0275\u0275template(35, HistoryComponent_div_35_Template, 24, 13, "div", 23)(36, HistoryComponent_div_36_Template, 4, 0, "div", 24);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.logs.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.countByModule());
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("placeholder", !ctx.filterCategory);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.filterCategory || "Semua Kategori");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showCategoryMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCategoryMenu);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterDate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filterDate);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filteredLogs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredLogs.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.history-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--border-color);\n  background: #f8fafc;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.mini-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.mini-val[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n}\n.mini-val.total[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.mini-val.module[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.mini-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  padding: 16px 28px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n  background: #fff;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px 9px 38px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  background: #f8fafc;\n  color: var(--text-main);\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  background: #fff;\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.filter-selects[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.date-filter-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 4px;\n}\n.date-filter-wrap[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.date-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  color: var(--text-main);\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.date-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.btn-clear-date[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n}\n.btn-clear-date[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fff;\n  font-size: 0.88rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  min-width: 160px;\n  -webkit-user-select: none;\n  user-select: none;\n  gap: 10px;\n}\n.custom-select-trigger[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n}\n.custom-select-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  transition: transform 0.2s;\n}\n.custom-select-trigger[_ngcontent-%COMP%]   i.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.placeholder[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  bottom: auto;\n  left: 0;\n  min-width: 100%;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n  z-index: 300;\n  padding: 4px 0;\n  animation: _ngcontent-%COMP%_slideDown 0.15s ease-out;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 0.88rem;\n  cursor: pointer;\n  color: var(--text-main);\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f9ff;\n  color: var(--primary-color);\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.active-opt[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.text-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.scrollable-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  max-height: 152px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e1 transparent;\n}\n.scrollable-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.scrollable-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.scrollable-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.log-timeline[_ngcontent-%COMP%] {\n  padding: 16px 28px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.log-entry[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid #f1f5f9;\n  position: relative;\n}\n.log-entry[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.log-entry[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #f1f5f9;\n  z-index: 0;\n}\n.log-dot[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1rem;\n  z-index: 1;\n}\n.dot-action[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.log-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.log-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n.log-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.badge-module[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.badge-action[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.log-time[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n.log-detail[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-main);\n  margin: 0 0 8px;\n  line-height: 1.5;\n}\n.log-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.log-meta[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.status-tag[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tag-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.tag-warning[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #b45309;\n}\n.tag-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.tag-info[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.empty-log[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n}\n.empty-log[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 12px;\n  color: #cbd5e1;\n  display: block;\n}\n@media (max-width: 768px) {\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filter-selects[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  .filter-selects[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .log-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .log-timeline[_ngcontent-%COMP%] {\n    padding: 12px 16px 20px;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .header-stats[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .mini-val[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .log-entry[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .log-dot[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    font-size: 0.85rem;\n  }\n  .log-detail[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n  .date-filter-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .date-input[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n    padding: 6px 8px;\n  }\n  .custom-select-trigger[_ngcontent-%COMP%] {\n    min-width: 120px;\n    font-size: 0.82rem;\n  }\n}\n/*# sourceMappingURL=history.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryComponent, [{
    type: Component,
    args: [{ selector: "app-history", standalone: true, imports: [CommonModule, FormsModule, DatePipe], template: `<div class="history-card">

  <!-- Header -->
  <div class="card-header">
    <div class="header-left">
      <h2><i class="fa-solid fa-clock-rotate-left"></i> Activity Log</h2>
      <p>Rekam jejak seluruh aktivitas pengguna dalam sistem</p>
    </div>
    <div class="header-stats">
      <div class="mini-stat">
        <span class="mini-val total">{{ logs.length }}</span>
        <span class="mini-lbl">Total Aktivitas</span>
      </div>
      <div class="mini-stat">
        <span class="mini-val module">{{ countByModule() }}</span>
        <span class="mini-lbl">Modul Aktif</span>
      </div>
    </div>
  </div>

  <!-- Filters -->
  <div class="filters-bar">
    <div class="search-box">
      <i class="fa-solid fa-search"></i>
      <input type="text" [(ngModel)]="searchQuery" placeholder="Cari aktivitas...">
    </div>
    <div class="filter-selects">

      <!-- Filter Kategori -->
      <div class="dropdown-container">
        <div class="custom-select-trigger" (click)="toggleCategoryMenu()">
          <span [class.placeholder]="!filterCategory">{{ filterCategory || 'Semua Kategori' }}</span>
          <i class="fa-solid fa-angle-down" [class.rotated]="showCategoryMenu"></i>
        </div>
        <div class="dropdown-menu scrollable-menu" *ngIf="showCategoryMenu">
          <ul>
            <li (click)="setCategory('')" [class.active-opt]="filterCategory === ''">Semua Kategori</li>
            <li *ngFor="let c of categories" (click)="setCategory(c)" [class.active-opt]="filterCategory === c">{{ c }}</li>
          </ul>
        </div>
      </div>

      <!-- Filter Tanggal -->
      <div class="date-filter-wrap">
        <i class="fa-regular fa-calendar"></i>
        <input type="date" [(ngModel)]="filterDate" class="date-input">
        <button *ngIf="filterDate" class="btn-clear-date" (click)="filterDate = ''" title="Reset tanggal">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

    </div>
  </div>

  <!-- Timeline Log -->
  <div class="log-timeline">
    <div class="log-entry" *ngFor="let log of filteredLogs">
      <!-- Action Icon Dot -->
      <div class="log-dot dot-action">
        <i class="fa-solid" [class]="getActionIcon(log.action)"></i>
      </div>

      <!-- Content -->
      <div class="log-content">
        <div class="log-top">
          <div class="log-badges">
            <span class="badge-module">
              <i class="fa-solid" [class]="getActionIcon(log.action)"></i>
              {{ log.module }}
            </span>
            <span class="badge-action">{{ log.action }}</span>
          </div>
          <div class="log-time">
            <i class="fa-regular fa-clock"></i>
            {{ log.timestamp | date:'dd MMM yyyy, HH:mm:ss' }}
          </div>
        </div>
        <p class="log-detail">{{ log.detail }}</p>
        <div class="log-meta">
          <span><i class="fa-solid fa-user"></i> {{ log.user }}</span>
          <span><i class="fa-solid fa-network-wired"></i> {{ log.ipAddress }}</span>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div class="empty-log" *ngIf="filteredLogs.length === 0">
      <i class="fa-solid fa-magnifying-glass"></i>
      <p>Tidak ada aktivitas yang sesuai filter</p>
    </div>
  </div>

</div>
`, styles: ['/* src/app-frontend/pages/history/history.component.css */\n.history-card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--border-color);\n  background: #f8fafc;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left h2 {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-left h2 i {\n  color: var(--primary-color);\n}\n.header-left p {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-stats {\n  display: flex;\n  gap: 20px;\n}\n.mini-stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.mini-val {\n  font-size: 1.4rem;\n  font-weight: 700;\n}\n.mini-val.total {\n  color: var(--primary-color);\n}\n.mini-val.module {\n  color: #7c3aed;\n}\n.mini-lbl {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.filters-bar {\n  padding: 16px 28px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n  background: #fff;\n}\n.search-box {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-box i {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n}\n.search-box input {\n  width: 100%;\n  padding: 9px 14px 9px 38px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  background: #f8fafc;\n  color: var(--text-main);\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.search-box input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  background: #fff;\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.filter-selects {\n  display: flex;\n  gap: 10px;\n}\n.date-filter-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 4px;\n}\n.date-filter-wrap > i {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.date-input {\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  color: var(--text-main);\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.date-input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.btn-clear-date {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n}\n.btn-clear-date:hover {\n  color: #dc2626;\n  background: #fee2e2;\n}\n.dropdown-container {\n  position: relative;\n}\n.custom-select-trigger {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fff;\n  font-size: 0.88rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  min-width: 160px;\n  -webkit-user-select: none;\n  user-select: none;\n  gap: 10px;\n}\n.custom-select-trigger:hover {\n  border-color: var(--primary-color);\n}\n.custom-select-trigger i {\n  font-size: 0.8rem;\n  color: #64748b;\n  transition: transform 0.2s;\n}\n.custom-select-trigger i.rotated {\n  transform: rotate(180deg);\n}\n.placeholder {\n  color: #94a3b8;\n}\n.dropdown-menu {\n  position: absolute;\n  top: calc(100% + 4px);\n  bottom: auto;\n  left: 0;\n  min-width: 100%;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n  z-index: 300;\n  padding: 4px 0;\n  animation: slideDown 0.15s ease-out;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu li {\n  padding: 9px 14px;\n  font-size: 0.88rem;\n  cursor: pointer;\n  color: var(--text-main);\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.dropdown-menu li:hover {\n  background: #f0f9ff;\n  color: var(--primary-color);\n}\n.dropdown-menu li.active-opt {\n  background: #e0f2fe;\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.text-success {\n  color: #16a34a;\n}\n.text-warning {\n  color: #d97706;\n}\n.text-error {\n  color: #dc2626;\n}\n.text-info {\n  color: #0284c7;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.scrollable-menu ul {\n  max-height: 152px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e1 transparent;\n}\n.scrollable-menu ul::-webkit-scrollbar {\n  width: 5px;\n}\n.scrollable-menu ul::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.scrollable-menu ul::-webkit-scrollbar-track {\n  background: transparent;\n}\n.log-timeline {\n  padding: 16px 28px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.log-entry {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid #f1f5f9;\n  position: relative;\n}\n.log-entry:last-child {\n  border-bottom: none;\n}\n.log-entry::before {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #f1f5f9;\n  z-index: 0;\n}\n.log-dot {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1rem;\n  z-index: 1;\n}\n.dot-action {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.log-content {\n  flex: 1;\n  min-width: 0;\n}\n.log-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n.log-badges {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.badge-module {\n  background: #e0f2fe;\n  color: #0369a1;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.badge-action {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.log-time {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n.log-detail {\n  font-size: 0.88rem;\n  color: var(--text-main);\n  margin: 0 0 8px;\n  line-height: 1.5;\n}\n.log-meta {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.log-meta > span {\n  font-size: 0.78rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.status-tag {\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tag-success {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.tag-warning {\n  background: #fef9c3;\n  color: #b45309;\n}\n.tag-error {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.tag-info {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.empty-log {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n}\n.empty-log i {\n  font-size: 2.5rem;\n  margin-bottom: 12px;\n  color: #cbd5e1;\n  display: block;\n}\n@media (max-width: 768px) {\n  .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .filters-bar {\n    flex-direction: column;\n  }\n  .filter-selects {\n    width: 100%;\n    flex-direction: column;\n  }\n  .filter-selects select {\n    width: 100%;\n  }\n  .log-top {\n    flex-direction: column;\n  }\n  .log-timeline {\n    padding: 12px 16px 20px;\n  }\n  .card-header {\n    padding: 16px;\n  }\n  .filters-bar {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .header-left h2 {\n    font-size: 1rem;\n  }\n  .header-stats {\n    gap: 12px;\n  }\n  .mini-val {\n    font-size: 1.1rem;\n  }\n  .log-entry {\n    gap: 10px;\n  }\n  .log-dot {\n    width: 34px;\n    height: 34px;\n    font-size: 0.85rem;\n  }\n  .log-detail {\n    font-size: 0.82rem;\n  }\n  .date-filter-wrap {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .date-input {\n    font-size: 0.82rem;\n    padding: 6px 8px;\n  }\n  .custom-select-trigger {\n    min-width: 120px;\n    font-size: 0.82rem;\n  }\n}\n/*# sourceMappingURL=history.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent", filePath: "src/app-frontend/pages/history/history.component.ts", lineNumber: 22 });
})();
export {
  HistoryComponent
};
//# sourceMappingURL=chunk-7OSX63TS.js.map
