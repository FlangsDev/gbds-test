import {
  Router
} from "./chunk-H43VSBM5.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/good-receipt/good-receipt.component.ts
function GoodReceiptComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 15)(24, "button", 17);
    \u0275\u0275listener("click", function GoodReceiptComponent_tr_64_Template_button_click_24_listener() {
      const h_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.printGR(h_r2));
    });
    \u0275\u0275element(25, "i", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const h_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.batch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.pengirim);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.partNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.desc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.nomorDaftar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.tanggalDaftar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.used);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r2.unit);
  }
}
function GoodReceiptComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21);
    \u0275\u0275element(3, "img", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 23)(5, "div", 24)(6, "h1");
    \u0275\u0275text(7, "Material Receiving Tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9, "Gudang Berikat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25)(11, "div", 26)(12, "span", 27);
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 28);
    \u0275\u0275text(15, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 29);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 26)(19, "span", 27);
    \u0275\u0275text(20, "Owner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 28);
    \u0275\u0275text(22, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 29);
    \u0275\u0275text(24, "Own Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 26)(26, "span", 27);
    \u0275\u0275text(27, "Vendor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 28);
    \u0275\u0275text(29, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 29);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "table", 30)(33, "thead")(34, "tr")(35, "th");
    \u0275\u0275text(36, "Batch Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Part Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Serial Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Mat QTY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Material Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "tbody")(46, "tr")(47, "td");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r2.selectedPrintItem.date);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r2.selectedPrintItem.vendor || "Lorem ipsum");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r2.selectedPrintItem.batchNum || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedPrintItem.partNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedPrintItem.serialNum || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedPrintItem.qty, " ", ctx_r2.selectedPrintItem.unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedPrintItem.desc);
  }
}
var GoodReceiptComponent = class _GoodReceiptComponent {
  get filteredItems() {
    return this.historyList.filter((item) => {
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
  constructor(router) {
    this.router = router;
    this.historyList = [
      { date: "12-03-2026", batch: "000001", pengirim: "PT MAJU JAYA", partNum: "PN-1001A", desc: "310 LITRE OXYGEN BOTTLE", qty: 50, nomorDaftar: "189914", tanggalDaftar: "04-03-2026", used: 0, unit: "SET" },
      { date: "11-03-2026", batch: "000002", pengirim: "FAST AVIATION", partNum: "PN-2022B", desc: "TURBO OIL 2380", qty: 100, nomorDaftar: "189915", tanggalDaftar: "05-03-2026", used: 20, unit: "LTR" },
      { date: "10-03-2026", batch: "000003", pengirim: "PT GLOBAL SUKSES", partNum: "PN-9988X", desc: "HYDRAULIC FLUID 41", qty: 25, nomorDaftar: "189916", tanggalDaftar: "06-03-2026", used: 5, unit: "LTR" }
    ];
    this.globalSearch = "";
    this.colSearch = {
      date: "",
      batch: "",
      pengirim: "",
      partNum: "",
      desc: "",
      qty: "",
      nomorDaftar: "",
      tanggalDaftar: "",
      used: "",
      unit: ""
    };
    this.selectedPrintItem = null;
  }
  navigateToAddForm() {
    this.router.navigate(["/gr-gi/gr/form"]);
  }
  printGR(item) {
    this.selectedPrintItem = item;
    setTimeout(() => {
      window.print();
      this.selectedPrintItem = null;
    }, 100);
  }
  static {
    this.\u0275fac = function GoodReceiptComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoodReceiptComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoodReceiptComponent, selectors: [["app-good-receipt"]], decls: 66, vars: 13, consts: [[1, "form-card"], [1, "form-header", "header-flex"], [2, "display", "flex", "gap", "12px", "align-items", "center"], [1, "search-box", 2, "position", "relative", "width", "300px"], [1, "fa-solid", "fa-magnifying-glass", 2, "position", "absolute", "left", "14px", "top", "50%", "transform", "translateY(-50%)", "color", "var(--text-muted)", "font-size", "0.9rem"], ["type", "text", "placeholder", "Search...", 2, "padding", "8px 14px 8px 40px", "border", "1px solid var(--border-color)", "border-radius", "6px", "background-color", "#f8fafc", "font-size", "0.85rem", "color", "var(--text-main)", "font-family", "inherit", "transition", "all 0.2s", 3, "ngModelChange", "ngModel"], [1, "history-view"], [1, "table-container"], ["width", "40"], ["width", "80", 1, "text-center"], ["width", "70", 1, "text-center"], [1, "col-search"], ["type", "text", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "print-template", 4, "ngIf"], [1, "text-center"], [1, "font-bold", "text-main"], [1, "btn-print-sm", 3, "click"], [1, "fa-solid", "fa-print"], [1, "print-template"], [1, "print-header-wrapper"], [1, "print-logo"], ["src", "assets/images/looo.png", "alt", "GMF AeroAsia", 2, "width", "270px", "height", "60px", "object-fit", "cover", "object-position", "center left", "margin-left", "-10px"], [1, "print-content"], [1, "print-title"], [1, "print-info-box"], [1, "info-row"], [1, "info-label"], [1, "info-colon"], [1, "info-value"], [1, "print-table"]], template: function GoodReceiptComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "History Data Good Receipt (GR)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Daftar riwayat penerimaan material terkini");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 3);
        \u0275\u0275element(9, "i", 4);
        \u0275\u0275elementStart(10, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.globalSearch, $event) || (ctx.globalSearch = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "table")(14, "thead")(15, "tr")(16, "th", 8);
        \u0275\u0275text(17, "No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Tanggal Receipt");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Batch Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Pengirim");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Part Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Material Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th", 9);
        \u0275\u0275text(29, "Jumlah");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "Nomor Daftar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Tanggal Daftar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th", 9);
        \u0275\u0275text(35, "Used");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th", 9);
        \u0275\u0275text(37, "Satuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th", 10);
        \u0275\u0275text(39, "Aksi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "tr");
        \u0275\u0275element(41, "th", 11);
        \u0275\u0275elementStart(42, "th", 11)(43, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.date, $event) || (ctx.colSearch.date = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "th", 11)(45, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.batch, $event) || (ctx.colSearch.batch = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "th", 11)(47, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.pengirim, $event) || (ctx.colSearch.pengirim = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "th", 11)(49, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.partNum, $event) || (ctx.colSearch.partNum = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "th", 11)(51, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.desc, $event) || (ctx.colSearch.desc = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "th", 11)(53, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.qty, $event) || (ctx.colSearch.qty = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "th", 11)(55, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.nomorDaftar, $event) || (ctx.colSearch.nomorDaftar = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "th", 11)(57, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.tanggalDaftar, $event) || (ctx.colSearch.tanggalDaftar = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "th", 11)(59, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.used, $event) || (ctx.colSearch.used = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "th", 11)(61, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptComponent_Template_input_ngModelChange_61_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.colSearch.unit, $event) || (ctx.colSearch.unit = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(62, "th", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "tbody");
        \u0275\u0275template(64, GoodReceiptComponent_tr_64_Template, 26, 11, "tr", 13);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(65, GoodReceiptComponent_div_65_Template, 57, 8, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.globalSearch);
        \u0275\u0275advance(33);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.date);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.batch);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.pengirim);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.partNum);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.desc);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.qty);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.nomorDaftar);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.tanggalDaftar);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.used);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.colSearch.unit);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.filteredItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedPrintItem);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: [`

.form-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  max-width: 100%;
  margin: 0;
}
.form-header[_ngcontent-%COMP%] {
  margin-bottom: 32px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 16px;
}
.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
}
.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-muted);
  font-size: 0.85rem;
}
.header-flex[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-primary[_ngcontent-%COMP%] {
  padding: 8px 18px;
  background: var(--primary-color);
  border: none;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #0284c7;
  transform: translateY(-1px);
}
.table-container[_ngcontent-%COMP%] {
  overflow-x: auto;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-top: 16px;
}
table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.7rem;
  background-color: white;
}
.col-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  padding: 2px 6px;
  font-size: inherit;
  border-radius: 4px;
  min-width: 40px;
  width: 100%;
}
th[_ngcontent-%COMP%], 
td[_ngcontent-%COMP%] {
  text-align: center;
  border: 1px solid #e2e8f0;
  padding: 4px 6px;
}
th[_ngcontent-%COMP%] {
  background-color: #f8fafc;
  color: #475569;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  vertical-align: middle;
}
.text-center[_ngcontent-%COMP%] {
  text-align: center;
}
.font-bold[_ngcontent-%COMP%] {
  font-weight: 700;
}
.text-main[_ngcontent-%COMP%] {
  color: var(--text-main);
}
.mt-3[_ngcontent-%COMP%] {
  margin-top: 24px;
}
.mt-4[_ngcontent-%COMP%] {
  margin-top: 32px;
}
.btn-print-sm[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e2e8f0;
  color: var(--primary-color);
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-print-sm[_ngcontent-%COMP%]:hover {
  background: #f0f9ff;
  border-color: #bae6fd;
}
.dropdown-container[_ngcontent-%COMP%] {
  position: relative;
}
.form-drop[_ngcontent-%COMP%] {
  width: 100%;
}
.w-100[_ngcontent-%COMP%] {
  width: 100%;
  justify-content: space-between;
  padding: 10px 14px;
  background: white;
}
.custom-select-trigger[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
}
.dropdown-menu[_ngcontent-%COMP%] {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  z-index: 50;
  padding: 8px 0;
}
.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 0.9rem;
}
.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {
  background-color: #f1f5f9;
}
.gr-form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 24px;
}
.form-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.flex-1[_ngcontent-%COMP%] {
  flex: 1;
}
.flex-2[_ngcontent-%COMP%] {
  flex: 2;
}
label[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-main);
}
.required[_ngcontent-%COMP%] {
  color: #e11d48;
}
.info-text[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 400;
}
input[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%], 
textarea[_ngcontent-%COMP%] {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text-main);
  transition: all 0.2s;
  background-color: #fff;
  font-family: inherit;
}
input[_ngcontent-%COMP%]:focus, 
select[_ngcontent-%COMP%]:focus, 
textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px #f0f9ff;
}
.input-readonly-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
.readonly-input[_ngcontent-%COMP%] {
  width: 100%;
  background-color: #f1f5f9;
  color: #64748b;
  cursor: not-allowed;
  border-color: #e2e8f0;
}
.input-icon-right[_ngcontent-%COMP%] {
  position: absolute;
  right: 16px;
  color: #cbd5e1;
}
.custom-select[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}
.btn-cancel[_ngcontent-%COMP%] {
  padding: 12px 24px;
  background: white;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-cancel[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
  color: var(--text-main);
}
.btn-submit[_ngcontent-%COMP%] {
  padding: 12px 24px;
  background: var(--primary-color);
  border: none;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.btn-submit[_ngcontent-%COMP%]:hover {
  background: #0284c7;
  transform: translateY(-1px);
}
@media (max-width: 1024px) {
  .form-card[_ngcontent-%COMP%] {
    padding: 24px 16px;
  }
  .form-row[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 16px;
  }
  .form-actions[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
  .header-flex[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
@media (max-width: 768px) {
  .form-card[_ngcontent-%COMP%] {
    padding: 16px 12px;
  }
  .form-header[_ngcontent-%COMP%] {
    margin-bottom: 20px;
  }
  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
}
.print-template[_ngcontent-%COMP%] {
  display: none;
}
@media print {
  @page {
    size: A5 landscape;
    margin: 3mm 5mm;
  }
  [_nghost-%COMP%] {
    display: block;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    min-height: 100vh;
    background: white !important;
    z-index: 999999 !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
  }
  .form-card[_ngcontent-%COMP%] {
    display: none !important;
  }
  .print-template[_ngcontent-%COMP%] {
    display: block !important;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    color: #000;
  }
  .print-header-wrapper[_ngcontent-%COMP%] {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid #00569d;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
  .print-logo[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
  }
  .print-content[_ngcontent-%COMP%] {
    padding: 0 10px;
  }
  .print-title[_ngcontent-%COMP%] {
    text-align: center;
    margin-bottom: 10px;
  }
  .print-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .print-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 12px;
    font-weight: normal;
    margin: 3px 0 0 0;
    color: #475569;
  }
  .print-info-box[_ngcontent-%COMP%] {
    margin-bottom: 10px;
    font-size: 11px;
    max-width: 400px;
  }
  .info-row[_ngcontent-%COMP%] {
    display: flex;
    margin-bottom: 4px;
  }
  .info-label[_ngcontent-%COMP%] {
    width: 80px;
    font-weight: bold;
  }
  .info-colon[_ngcontent-%COMP%] {
    width: 20px;
    text-align: center;
  }
  .info-value[_ngcontent-%COMP%] {
    flex: 1;
    font-weight: normal;
  }
  .print-table[_ngcontent-%COMP%] {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    margin-bottom: 10px;
  }
  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], 
   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    border: 1px solid #000 !important;
    padding: 6px 4px;
    text-align: center;
    color: #000;
    background-color: transparent !important;
  }
  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
    text-align: center;
    font-weight: bold;
    background-color: #f1f5f9 !important;
  }
  *[_ngcontent-%COMP%] {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
/*# sourceMappingURL=good-receipt.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoodReceiptComponent, [{
    type: Component,
    args: [{ selector: "app-good-receipt", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="form-card">
  <div class="form-header header-flex">
    <div>
      <h2>History Data Good Receipt (GR)</h2>
      <p>Daftar riwayat penerimaan material terkini</p>
    </div>
    <div style="display: flex; gap: 12px; align-items: center;">
      <div class="search-box" style="position: relative; width: 300px;">
        <i class="fa-solid fa-magnifying-glass" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 0.9rem;"></i>
        <input type="text" placeholder="Search..." [(ngModel)]="globalSearch" style="padding: 8px 14px 8px 40px; border: 1px solid var(--border-color); border-radius: 6px; background-color: #f8fafc; font-size: 0.85rem; color: var(--text-main); font-family: inherit; transition: all 0.2s;">
      </div>
      <!-- <button class="btn-primary" (click)="navigateToAddForm()">
        <i class="fa-solid fa-plus"></i> Add Data GR
      </button> -->
    </div>
  </div>

  <div class="history-view">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th width="40">No.</th>
            <th>Tanggal Receipt</th>
            <th>Batch Number</th>
            <th>Pengirim</th>
            <th>Part Number</th>
            <th>Material Description</th>
            <th width="80" class="text-center">Jumlah</th>
            <th>Nomor Daftar</th>
            <th>Tanggal Daftar</th>
            <th width="80" class="text-center">Used</th>
            <th width="80" class="text-center">Satuan</th>
            <th width="70" class="text-center">Aksi</th>
          </tr>
          <tr>
            <th class="col-search"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.date"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.batch"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.pengirim"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.partNum"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.desc"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.qty"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.nomorDaftar"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.tanggalDaftar"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.used"></th>
            <th class="col-search"><input type="text" placeholder="Search..." [(ngModel)]="colSearch.unit"></th>
            <th class="col-search"></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let h of filteredItems; let i = index">
            <td class="text-center">{{i + 1}}</td>
            <td>{{h.date}}</td>
            <td class="font-bold text-main">{{h.batch}}</td>
            <td>{{h.pengirim}}</td>
            <td class="font-bold text-main">{{h.partNum}}</td>
            <td>{{h.desc}}</td>
            <td class="text-center">{{h.qty}}</td>
            <td>{{h.nomorDaftar}}</td>
            <td>{{h.tanggalDaftar}}</td>
            <td class="text-center">{{h.used}}</td>
            <td class="text-center">{{h.unit}}</td>
            <td class="text-center">
               <button class="btn-print-sm" (click)="printGR(h)"><i class="fa-solid fa-print"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


<!-- PRINT TEMPLATE -->
<div class="print-template" *ngIf="selectedPrintItem">
  
  <div class="print-header-wrapper">
    <div class="print-logo">
      <img src="assets/images/looo.png" alt="GMF AeroAsia" style="width: 270px; height: 60px; object-fit: cover; object-position: center left; margin-left: -10px;">
    </div>
  </div>

  <div class="print-content">
    <div class="print-title">
      <h1>Material Receiving Tag</h1>
      <h2>Gudang Berikat</h2>
    </div>
    
    <div class="print-info-box">
      <div class="info-row">
        <span class="info-label">Date</span>
        <span class="info-colon">:</span>
        <span class="info-value">{{selectedPrintItem.date}}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Owner</span>
        <span class="info-colon">:</span>
        <span class="info-value">Own Stock</span>
      </div>
      <div class="info-row">
        <span class="info-label">Vendor</span>
        <span class="info-colon">:</span>
        <span class="info-value">{{selectedPrintItem.vendor || 'Lorem ipsum'}}</span>
      </div>
    </div>
  
  <table class="print-table">
    <thead>
      <tr>
        <th>Batch Number</th>
        <th>Part Number</th>
        <th>Serial Number</th>
        <th>Mat QTY</th>
        <th>Material Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{selectedPrintItem.batchNum || '-'}}</td>
        <td>{{selectedPrintItem.partNum}}</td>
        <td>{{selectedPrintItem.serialNum || '-'}}</td>
        <td>{{selectedPrintItem.qty}} {{selectedPrintItem.unit}}</td>
        <td>{{selectedPrintItem.desc}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>

`, styles: [`/* src/app-frontend/pages/good-receipt/good-receipt.component.css */
.form-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  max-width: 100%;
  margin: 0;
}
.form-header {
  margin-bottom: 32px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 16px;
}
.form-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
}
.form-header p {
  color: var(--text-muted);
  font-size: 0.85rem;
}
.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-primary {
  padding: 8px 18px;
  background: var(--primary-color);
  border: none;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.btn-primary:hover {
  background: #0284c7;
  transform: translateY(-1px);
}
.table-container {
  overflow-x: auto;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-top: 16px;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.7rem;
  background-color: white;
}
.col-search input {
  padding: 2px 6px;
  font-size: inherit;
  border-radius: 4px;
  min-width: 40px;
  width: 100%;
}
th,
td {
  text-align: center;
  border: 1px solid #e2e8f0;
  padding: 4px 6px;
}
th {
  background-color: #f8fafc;
  color: #475569;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  vertical-align: middle;
}
.text-center {
  text-align: center;
}
.font-bold {
  font-weight: 700;
}
.text-main {
  color: var(--text-main);
}
.mt-3 {
  margin-top: 24px;
}
.mt-4 {
  margin-top: 32px;
}
.btn-print-sm {
  background: white;
  border: 1px solid #e2e8f0;
  color: var(--primary-color);
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-print-sm:hover {
  background: #f0f9ff;
  border-color: #bae6fd;
}
.dropdown-container {
  position: relative;
}
.form-drop {
  width: 100%;
}
.w-100 {
  width: 100%;
  justify-content: space-between;
  padding: 10px 14px;
  background: white;
}
.custom-select-trigger {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  z-index: 50;
  padding: 8px 0;
}
.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown-menu li {
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 0.9rem;
}
.dropdown-menu li:hover {
  background-color: #f1f5f9;
}
.gr-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-row {
  display: flex;
  gap: 24px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.flex-1 {
  flex: 1;
}
.flex-2 {
  flex: 2;
}
label {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-main);
}
.required {
  color: #e11d48;
}
.info-text {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 400;
}
input,
select,
textarea {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text-main);
  transition: all 0.2s;
  background-color: #fff;
  font-family: inherit;
}
input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px #f0f9ff;
}
.input-readonly-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.readonly-input {
  width: 100%;
  background-color: #f1f5f9;
  color: #64748b;
  cursor: not-allowed;
  border-color: #e2e8f0;
}
.input-icon-right {
  position: absolute;
  right: 16px;
  color: #cbd5e1;
}
.custom-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}
.btn-cancel {
  padding: 12px 24px;
  background: white;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-cancel:hover {
  background: #f8fafc;
  color: var(--text-main);
}
.btn-submit {
  padding: 12px 24px;
  background: var(--primary-color);
  border: none;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.btn-submit:hover {
  background: #0284c7;
  transform: translateY(-1px);
}
@media (max-width: 1024px) {
  .form-card {
    padding: 24px 16px;
  }
  .form-row {
    flex-direction: column;
    gap: 16px;
  }
  .form-actions {
    flex-direction: column;
  }
  .form-actions button {
    width: 100%;
    justify-content: center;
  }
  .header-flex {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
@media (max-width: 768px) {
  .form-card {
    padding: 16px 12px;
  }
  .form-header {
    margin-bottom: 20px;
  }
  .form-header h2 {
    font-size: 1.1rem;
  }
}
.print-template {
  display: none;
}
@media print {
  @page {
    size: A5 landscape;
    margin: 3mm 5mm;
  }
  :host {
    display: block;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    min-height: 100vh;
    background: white !important;
    z-index: 999999 !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
  }
  .form-card {
    display: none !important;
  }
  .print-template {
    display: block !important;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    color: #000;
  }
  .print-header-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid #00569d;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
  .print-logo {
    display: flex;
    align-items: center;
  }
  .print-content {
    padding: 0 10px;
  }
  .print-title {
    text-align: center;
    margin-bottom: 10px;
  }
  .print-title h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .print-title h2 {
    font-size: 12px;
    font-weight: normal;
    margin: 3px 0 0 0;
    color: #475569;
  }
  .print-info-box {
    margin-bottom: 10px;
    font-size: 11px;
    max-width: 400px;
  }
  .info-row {
    display: flex;
    margin-bottom: 4px;
  }
  .info-label {
    width: 80px;
    font-weight: bold;
  }
  .info-colon {
    width: 20px;
    text-align: center;
  }
  .info-value {
    flex: 1;
    font-weight: normal;
  }
  .print-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    margin-bottom: 10px;
  }
  .print-table th,
  .print-table td {
    border: 1px solid #000 !important;
    padding: 6px 4px;
    text-align: center;
    color: #000;
    background-color: transparent !important;
  }
  .print-table th {
    text-align: center;
    font-weight: bold;
    background-color: #f1f5f9 !important;
  }
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
/*# sourceMappingURL=good-receipt.component.css.map */
`] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoodReceiptComponent, { className: "GoodReceiptComponent", filePath: "src/app-frontend/pages/good-receipt/good-receipt.component.ts", lineNumber: 13 });
})();
export {
  GoodReceiptComponent
};
//# sourceMappingURL=chunk-ZDM3JPVO.js.map
