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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/saldo-awal/saldo-awal.component.ts
function SaldoAwalComponent_div_11_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.no);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.kodeBarang);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hasFilteredData ? item_r3.jumlah : 0);
  }
}
function SaldoAwalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "label", 13);
    \u0275\u0275text(4, "Pilih Tanggal Upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function SaldoAwalComponent_div_11_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterDate, $event) || (ctx_r1.filterDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function SaldoAwalComponent_div_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showFilteredData());
    });
    \u0275\u0275element(7, "i", 16);
    \u0275\u0275text(8, " Tampilkan Data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17)(10, "table")(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "NO.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "KODE BARANG / PART NUMBER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "JUMLAH FISIK");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, SaldoAwalComponent_div_11_tr_20_Template, 7, 3, "tr", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterDate);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.items);
  }
}
function SaldoAwalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Upload Data Saldo Awal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Silakan upload file excel hasil Saldo Awal terbaru.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function SaldoAwalComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePanels());
    });
    \u0275\u0275element(8, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275element(10, "i", 24);
    \u0275\u0275elementStart(11, "span")(12, "strong");
    \u0275\u0275text(13, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " File Excel harus terdiri dari 2 kolom. Kolom pertama adalah Part Number / Kode Barang, dan kolom kedua adalah Jumlah.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 25)(16, "div", 26)(17, "label", 13);
    \u0275\u0275text(18, "Tanggal Upload ");
    \u0275\u0275elementStart(19, "span", 27);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SaldoAwalComponent_div_12_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.uploadDate, $event) || (ctx_r1.uploadDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 29)(23, "div", 30)(24, "label", 31);
    \u0275\u0275text(25, "Upload File Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 32);
    \u0275\u0275element(27, "i", 33);
    \u0275\u0275text(28, " Download Format Template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 34)(30, "div", 35);
    \u0275\u0275element(31, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h3");
    \u0275\u0275text(33, "Drag & drop file disini");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "atau klik untuk memilih file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 37);
    \u0275\u0275text(37, "Format: .xlsx, .xls (Maks. 10MB)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 38)(39, "button", 39);
    \u0275\u0275listener("click", function SaldoAwalComponent_div_12_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePanels());
    });
    \u0275\u0275text(40, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 40);
    \u0275\u0275element(42, "i", 41);
    \u0275\u0275text(43, " Upload & Proses ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.uploadDate);
  }
}
function SaldoAwalComponent_div_13_tr_24_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td")(8, "span", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 44);
    \u0275\u0275element(12, "i", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const hist_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hist_r6.tanggal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hist_r6.namaFile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hist_r6.user);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hist_r6.status);
  }
}
function SaldoAwalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div")(3, "h2");
    \u0275\u0275text(4, "History Upload Saldo Awal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Riwayat upload data saldo awal sebelumnya.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function SaldoAwalComponent_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePanels());
    });
    \u0275\u0275element(8, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 42)(10, "table")(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "TANGGAL UPLOAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "NAMA FILE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "DIPROSES OLEH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "AKSI");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, SaldoAwalComponent_div_13_tr_24_Template, 13, 4, "tr", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.histories);
  }
}
var SaldoAwalComponent = class _SaldoAwalComponent {
  constructor() {
    this.showUploadForm = false;
    this.showHistory = false;
    this.uploadDate = "";
    this.filterDate = "";
    this.hasFilteredData = false;
    this.items = [
      { no: "1", kodeBarang: "PN-00100", jumlah: 150 },
      { no: "2", kodeBarang: "PN-00101", jumlah: 195 },
      { no: "3", kodeBarang: "PN-00102", jumlah: 45 },
      { no: "4", kodeBarang: "PN-00103", jumlah: 302 },
      { no: "5", kodeBarang: "PN-00104", jumlah: 80 }
    ];
    this.histories = [
      { tanggal: "12 Mar 2026, 14:30", namaFile: "SA_Tahunan_2026.xlsx", user: "Admin Gudang", status: "SUCCESS" },
      { tanggal: "11 Mar 2026, 09:15", namaFile: "SA_Parsial_Maret.xlsx", user: "Admin Gudang", status: "SUCCESS" },
      { tanggal: "05 Feb 2026, 10:00", namaFile: "SA_Bulanan_Feb.xlsx", user: "Super Admin", status: "SUCCESS" }
    ];
  }
  toggleUploadForm() {
    this.showUploadForm = true;
    this.showHistory = false;
  }
  toggleHistory() {
    this.showHistory = true;
    this.showUploadForm = false;
  }
  closePanels() {
    this.showUploadForm = false;
    this.showHistory = false;
  }
  showFilteredData() {
    if (this.filterDate) {
      this.hasFilteredData = true;
    } else {
      this.hasFilteredData = false;
    }
  }
  static {
    this.\u0275fac = function SaldoAwalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SaldoAwalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaldoAwalComponent, selectors: [["app-saldo-awal"]], decls: 14, vars: 3, consts: [[1, "report-header"], [1, "actions-left"], [1, "page-title"], [1, "actions"], [1, "btn-secondary", 3, "click"], [1, "fa-solid", "fa-clock-rotate-left"], [1, "btn-primary", 3, "click"], [1, "fa-solid", "fa-upload"], ["class", "content-section", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], [1, "content-section"], [1, "filter-section", 2, "margin-bottom", "20px", "display", "flex", "gap", "16px", "align-items", "center", "background", "white", "padding", "16px 20px", "border-radius", "12px", "border", "1px solid var(--border-color)"], [1, "form-group", 2, "margin-bottom", "0", "min-width", "250px"], [2, "font-size", "0.85rem", "font-weight", "600", "color", "var(--text-main)", "margin-bottom", "8px", "display", "block"], ["type", "text", "placeholder", "dd/mm/yyyy", "onfocus", "this.type='date'", "onblur", "if(!this.value) this.type='text'", 2, "width", "100%", "padding", "10px", "border-radius", "8px", "border", "1px solid var(--border-color)", "font-family", "inherit", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 2, "align-self", "flex-end", "height", "42px", 3, "click"], [1, "fa-solid", "fa-search"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "form-card"], [1, "form-header", "flex-between"], [1, "btn-close", 3, "click"], [1, "fa-solid", "fa-times"], [1, "upload-notice"], [1, "fa-solid", "fa-circle-info"], [1, "upload-container", "mt-24"], [1, "form-group", 2, "margin-bottom", "20px"], [2, "color", "red"], ["type", "date", 2, "width", "250px", "padding", "10px", "border-radius", "8px", "border", "1px solid var(--border-color)", "font-family", "inherit", 3, "ngModelChange", "ngModel"], [1, "form-group"], [1, "flex-between", 2, "align-items", "flex-end", "margin-bottom", "8px"], [2, "margin-bottom", "0"], [1, "btn-text", "text-primary", 2, "font-size", "0.85rem", "display", "flex", "align-items", "center", "gap", "6px"], [1, "fa-solid", "fa-download"], [1, "dropzone"], [1, "drop-icon"], [1, "fa-solid", "fa-file-excel"], [1, "file-hint"], [1, "form-actions", "mt-32"], [1, "btn-delete", 3, "click"], [1, "btn-upload"], [1, "fa-solid", "fa-cloud-arrow-up"], [1, "table-container", "mt-24"], [1, "badge", "badge-blue"], [1, "btn-text", "text-primary"]], template: function SaldoAwalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Data Saldo Awal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function SaldoAwalComponent_Template_button_click_5_listener() {
          return ctx.toggleHistory();
        });
        \u0275\u0275element(6, "i", 5);
        \u0275\u0275text(7, " History Upload ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function SaldoAwalComponent_Template_button_click_8_listener() {
          return ctx.toggleUploadForm();
        });
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275text(10, " Update Data Terbaru ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, SaldoAwalComponent_div_11_Template, 21, 2, "div", 8)(12, SaldoAwalComponent_div_12_Template, 44, 1, "div", 9)(13, SaldoAwalComponent_div_13_Template, 25, 1, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", !ctx.showUploadForm && !ctx.showHistory);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUploadForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showHistory);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.report-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text-main);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #1e3a8a;\n  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.2);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #fff;\n  color: var(--text-main);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  border-color: #cbd5e1;\n}\n.content-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  overflow-x: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\nth[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  padding: 10px 12px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border-color);\n}\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 12px 12px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--text-main);\n}\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background-color: #e0f2fe;\n  color: #0369a1;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 16px 20px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  max-width: 100%;\n  margin: 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 6px;\n  color: var(--text-main);\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  transition: color 0.2s;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.upload-notice[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1e40af;\n  padding: 10px 14px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.84rem;\n  line-height: 1.4;\n}\n.upload-notice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #3b82f6;\n}\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.mt-32[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: var(--text-main);\n}\n.dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n  background-color: #f8fafc;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dropzone[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: #eff6ff;\n}\n.drop-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--primary-color);\n  margin-bottom: 6px;\n}\n.dropzone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.dropzone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin-bottom: 6px;\n}\n.file-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-delete[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border: 1px solid #cbd5e1;\n  background: white;\n  color: var(--text-main);\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.btn-upload[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  background: var(--primary-color);\n  color: white;\n  border: none;\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.2);\n}\n.btn-upload[_ngcontent-%COMP%]:hover {\n  background: #1e3a8a;\n  box-shadow: 0 6px 16px rgba(30, 58, 138, 0.3);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.btn-text[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.text-primary[_ngcontent-%COMP%]:hover {\n  color: #1e3a8a;\n}\n@media (max-width: 1024px) {\n  .report-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .dropzone[_ngcontent-%COMP%] {\n    padding: 32px 16px;\n  }\n}\n@media (max-width: 768px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n    padding: 8px 14px;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n  }\n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n    padding: 8px 12px;\n    gap: 6px;\n  }\n}\n/*# sourceMappingURL=saldo-awal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaldoAwalComponent, [{
    type: Component,
    args: [{ selector: "app-saldo-awal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="report-header">
  <div class="actions-left">
    <h2 class="page-title">Data Saldo Awal</h2>
  </div>
  <div class="actions">
    <button class="btn-secondary" (click)="toggleHistory()">
      <i class="fa-solid fa-clock-rotate-left"></i> History Upload
    </button>
    <button class="btn-primary" (click)="toggleUploadForm()">
      <i class="fa-solid fa-upload"></i> Update Data Terbaru
    </button>
  </div>
</div>

<!-- DATA TABLE VIEW -->
<div class="content-section" *ngIf="!showUploadForm && !showHistory">
  <div class="filter-section" style="margin-bottom: 20px; display: flex; gap: 16px; align-items: center; background: white; padding: 16px 20px; border-radius: 12px; border: 1px solid var(--border-color);">
    <div class="form-group" style="margin-bottom: 0; min-width: 250px;">
      <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-main); margin-bottom: 8px; display: block;">Pilih Tanggal Upload</label>
      <input type="text" placeholder="dd/mm/yyyy" onfocus="this.type='date'" onblur="if(!this.value) this.type='text'" [(ngModel)]="filterDate" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--border-color); font-family: inherit;">
    </div>
    <button class="btn-primary" (click)="showFilteredData()" style="align-self: flex-end; height: 42px;"><i class="fa-solid fa-search"></i> Tampilkan Data</button>
  </div>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>NO.</th>
          <th>KODE BARANG / PART NUMBER</th>
          <th>JUMLAH FISIK</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items">
          <td>{{item.no}}</td>
          <td>{{item.kodeBarang}}</td>
          <td>{{hasFilteredData ? item.jumlah : 0}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- UPLOAD FORM VIEW -->
<div class="form-card" *ngIf="showUploadForm">
  <div class="form-header flex-between">
    <div>
      <h2>Upload Data Saldo Awal</h2>
      <p>Silakan upload file excel hasil Saldo Awal terbaru.</p>
    </div>
    <button class="btn-close" (click)="closePanels()"><i class="fa-solid fa-times"></i></button>
  </div>
  
  <div class="upload-notice">
    <i class="fa-solid fa-circle-info"></i>
    <span><strong>Note:</strong> File Excel harus terdiri dari 2 kolom. Kolom pertama adalah Part Number / Kode Barang, dan kolom kedua adalah Jumlah.</span>
  </div>

  <div class="upload-container mt-24">
    <div class="form-group" style="margin-bottom: 20px;">
      <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-main); margin-bottom: 8px; display: block;">Tanggal Upload <span style="color:red">*</span></label>
      <input type="date" [(ngModel)]="uploadDate" style="width: 250px; padding: 10px; border-radius: 8px; border: 1px solid var(--border-color); font-family: inherit;">
    </div>

    <div class="form-group">
      <div class="flex-between" style="align-items: flex-end; margin-bottom: 8px;">
        <label style="margin-bottom: 0;">Upload File Excel</label>
        <button class="btn-text text-primary" style="font-size: 0.85rem; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-download"></i> Download Format Template</button>
      </div>
      <div class="dropzone">
        <div class="drop-icon">
          <i class="fa-solid fa-file-excel"></i>
        </div>
        <h3>Drag & drop file disini</h3>
        <p>atau klik untuk memilih file</p>
        <span class="file-hint">Format: .xlsx, .xls (Maks. 10MB)</span>
      </div>
    </div>

    <div class="form-actions mt-32">
      <button class="btn-delete" (click)="closePanels()">Batal</button>
      <button class="btn-upload">
        <i class="fa-solid fa-cloud-arrow-up"></i>
        Upload & Proses
      </button>
    </div>
  </div>
</div>

<!-- HISTORY VIEW -->
<div class="form-card" *ngIf="showHistory">
   <div class="form-header flex-between">
    <div>
      <h2>History Upload Saldo Awal</h2>
      <p>Riwayat upload data saldo awal sebelumnya.</p>
    </div>
    <button class="btn-close" (click)="closePanels()"><i class="fa-solid fa-times"></i></button>
  </div>
  
  <div class="table-container mt-24">
    <table>
      <thead>
        <tr>
          <th>TANGGAL UPLOAD</th>
          <th>NAMA FILE</th>
          <th>DIPROSES OLEH</th>
          <th>STATUS</th>
          <th>AKSI</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let hist of histories">
          <td>{{hist.tanggal}}</td>
          <td>{{hist.namaFile}}</td>
          <td>{{hist.user}}</td>
          <td><span class="badge badge-blue">{{hist.status}}</span></td>
          <td>
            <button class="btn-text text-primary"><i class="fa-solid fa-download"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`, styles: ["/* src/app-frontend/pages/saldo-awal/saldo-awal.component.css */\n.report-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text-main);\n}\n.actions {\n  display: flex;\n  gap: 16px;\n}\n.btn-primary {\n  padding: 10px 16px;\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n.btn-primary:hover {\n  background-color: #1e3a8a;\n  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.2);\n}\n.btn-secondary {\n  padding: 10px 16px;\n  background-color: #fff;\n  color: var(--text-main);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n.btn-secondary:hover {\n  background-color: #f8fafc;\n  border-color: #cbd5e1;\n}\n.content-section {\n  animation: fadeIn 0.3s ease-in-out;\n}\n.table-container {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  overflow-x: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\nth {\n  background-color: #f8fafc;\n  padding: 10px 12px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border-color);\n}\ntd {\n  text-align: center;\n  padding: 12px 12px;\n  border-bottom: 1px solid #f1f5f9;\n  color: var(--text-main);\n}\ntr:hover {\n  background-color: #f8fafc;\n}\n.badge {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.badge-blue {\n  background-color: #e0f2fe;\n  color: #0369a1;\n}\n.badge-red {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.text-red {\n  color: #dc2626;\n  font-weight: 600;\n}\n.text-green {\n  color: #16a34a;\n  font-weight: 600;\n}\n.form-card {\n  background: white;\n  border-radius: 12px;\n  padding: 16px 20px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n  max-width: 100%;\n  margin: 0;\n  animation: fadeIn 0.3s ease-in-out;\n}\n.form-header {\n  margin-bottom: 14px;\n}\n.form-header h2 {\n  font-size: 1.25rem;\n  margin-bottom: 6px;\n  color: var(--text-main);\n}\n.form-header p {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.btn-close {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  transition: color 0.2s;\n}\n.btn-close:hover {\n  color: #dc2626;\n}\n.upload-notice {\n  background-color: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1e40af;\n  padding: 10px 14px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.84rem;\n  line-height: 1.4;\n}\n.upload-notice i {\n  font-size: 1.2rem;\n  color: #3b82f6;\n}\n.mt-24 {\n  margin-top: 14px;\n}\n.mt-32 {\n  margin-top: 20px;\n}\n.form-group label {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: var(--text-main);\n}\n.dropzone {\n  border: 2px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n  background-color: #f8fafc;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dropzone:hover {\n  border-color: var(--primary-color);\n  background-color: #eff6ff;\n}\n.drop-icon {\n  font-size: 1.8rem;\n  color: var(--primary-color);\n  margin-bottom: 6px;\n}\n.dropzone h3 {\n  font-size: 0.95rem;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.dropzone p {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin-bottom: 6px;\n}\n.file-hint {\n  font-size: 0.8rem;\n  color: #94a3b8;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-delete {\n  padding: 8px 18px;\n  border: 1px solid #cbd5e1;\n  background: white;\n  color: var(--text-main);\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n.btn-delete:hover {\n  background: #f1f5f9;\n}\n.btn-upload {\n  padding: 8px 18px;\n  background: var(--primary-color);\n  color: white;\n  border: none;\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.2);\n}\n.btn-upload:hover {\n  background: #1e3a8a;\n  box-shadow: 0 6px 16px rgba(30, 58, 138, 0.3);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.btn-text {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.text-primary {\n  color: var(--primary-color);\n}\n.text-primary:hover {\n  color: #1e3a8a;\n}\n@media (max-width: 1024px) {\n  .report-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .actions {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .actions button {\n    flex: 1;\n    justify-content: center;\n  }\n  .form-card {\n    padding: 24px 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n  .dropzone {\n    padding: 32px 16px;\n  }\n}\n@media (max-width: 768px) {\n  .page-title {\n    font-size: 1.2rem;\n  }\n  .btn-primary,\n  .btn-secondary {\n    font-size: 0.82rem;\n    padding: 8px 14px;\n  }\n  .form-card {\n    padding: 14px 12px;\n  }\n  .form-header h2 {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .page-title {\n    font-size: 1rem;\n  }\n  .actions {\n    gap: 8px;\n  }\n  .btn-primary,\n  .btn-secondary {\n    font-size: 0.78rem;\n    padding: 8px 12px;\n    gap: 6px;\n  }\n}\n/*# sourceMappingURL=saldo-awal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaldoAwalComponent, { className: "SaldoAwalComponent", filePath: "src/app-frontend/pages/saldo-awal/saldo-awal.component.ts", lineNumber: 12 });
})();
export {
  SaldoAwalComponent
};
//# sourceMappingURL=chunk-7Q2QWWKD.js.map
