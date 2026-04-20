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
  __spreadValues,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/master-barang/master-barang.component.ts
function MasterBarangComponent_div_0_div_23_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24);
    \u0275\u0275listener("click", function MasterBarangComponent_div_0_div_23_li_4_Template_li_click_0_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectFilterSatuan(s_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5);
  }
}
function MasterBarangComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "ul")(2, "li", 24);
    \u0275\u0275listener("click", function MasterBarangComponent_div_0_div_23_Template_li_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectFilterSatuan(""));
    });
    \u0275\u0275text(3, "Semua Satuan");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MasterBarangComponent_div_0_div_23_li_4_Template, 2, 1, "li", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.uniqueSatuan);
  }
}
function MasterBarangComponent_div_0_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 28)(10, "button", 29);
    \u0275\u0275listener("click", function MasterBarangComponent_div_0_tr_39_Template_button_click_10_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditForm(i_r7));
    });
    \u0275\u0275element(11, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 31);
    \u0275\u0275listener("click", function MasterBarangComponent_div_0_tr_39_Template_button_click_12_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteItem(i_r7));
    });
    \u0275\u0275element(13, "i", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.partNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.satuan);
  }
}
function MasterBarangComponent_div_0_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Tidak ada data ditemukan");
    \u0275\u0275elementEnd()()();
  }
}
function MasterBarangComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Master Data Barang");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Kelola data master barang gudang berikat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275listener("click", function MasterBarangComponent_div_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportData());
    });
    \u0275\u0275element(9, "i", 6);
    \u0275\u0275text(10, " Unduh Data ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function MasterBarangComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddForm());
    });
    \u0275\u0275element(12, "i", 8);
    \u0275\u0275text(13, " Tambah Barang ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
    \u0275\u0275element(16, "i", 11);
    \u0275\u0275elementStart(17, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MasterBarangComponent_div_0_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchKeyword, $event) || (ctx_r1.searchKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275listener("click", function MasterBarangComponent_div_0_Template_div_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterSatuanOpen = !ctx_r1.filterSatuanOpen);
    });
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, MasterBarangComponent_div_0_div_23_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "table")(26, "thead")(27, "tr")(28, "th", 18);
    \u0275\u0275text(29, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Part Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Material Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 19);
    \u0275\u0275text(35, "Satuan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 20);
    \u0275\u0275text(37, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody");
    \u0275\u0275template(39, MasterBarangComponent_div_0_tr_39_Template, 14, 4, "tr", 21)(40, MasterBarangComponent_div_0_tr_40_Template, 5, 0, "tr", 22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchKeyword);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.filterSatuan || "Semua Satuan");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filterSatuanOpen);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.filteredData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredData.length === 0);
  }
}
function MasterBarangComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 37)(8, "div", 38)(9, "div", 39)(10, "label");
    \u0275\u0275text(11, "Part Number ");
    \u0275\u0275elementStart(12, "span", 40);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function MasterBarangComponent_div_1_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.partNumber, $event) || (ctx_r1.formData.partNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 39)(16, "label");
    \u0275\u0275text(17, "Satuan ");
    \u0275\u0275elementStart(18, "span", 40);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function MasterBarangComponent_div_1_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.satuan, $event) || (ctx_r1.formData.satuan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 43)(22, "label");
    \u0275\u0275text(23, "Material Description ");
    \u0275\u0275elementStart(24, "span", 40);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function MasterBarangComponent_div_1_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.description, $event) || (ctx_r1.formData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 45)(28, "button", 46);
    \u0275\u0275listener("click", function MasterBarangComponent_div_1_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(29, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 47);
    \u0275\u0275listener("click", function MasterBarangComponent_div_1_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveForm());
    });
    \u0275\u0275element(31, "i", 48);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Data Barang" : "Tambah Data Barang Baru");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Ubah informasi data master barang" : "Isi informasi data master barang baru");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.partNumber);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.satuan);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Update" : "Simpan", " ");
  }
}
var MasterBarangComponent = class _MasterBarangComponent {
  constructor() {
    this.searchKeyword = "";
    this.filterSatuan = "";
    this.isFormOpen = false;
    this.isEditing = false;
    this.editingIndex = -1;
    this.formData = {
      partNumber: "",
      description: "",
      satuan: ""
    };
    this.masterData = [
      { partNumber: "PN-1001A", description: "310 LITRE OXYGEN BOTTLE", satuan: "SET" },
      { partNumber: "PN-2022B", description: "TURBO OIL 2380", satuan: "LTR" },
      { partNumber: "PN-9988X", description: "HYDRAULIC FLUID 41", satuan: "LTR" },
      { partNumber: "PN-3344C", description: "AIRCRAFT TIRE 737", satuan: "PCS" },
      { partNumber: "PN-5566D", description: "BRAKE LINING KIT", satuan: "SET" },
      { partNumber: "PN-7788E", description: "SEALANT PR-1422", satuan: "EA" },
      { partNumber: "PN-1122F", description: "RIVET NAS1097", satuan: "BOX" },
      { partNumber: "PN-4455G", description: "SAFETY WIRE 0.032", satuan: "ROLL" }
    ];
    this.filterSatuanOpen = false;
  }
  get uniqueSatuan() {
    return [...new Set(this.masterData.map((item) => item.satuan))].sort();
  }
  get filteredData() {
    return this.masterData.filter((item) => {
      const matchSearch = !this.searchKeyword || item.partNumber.toLowerCase().includes(this.searchKeyword.toLowerCase()) || item.description.toLowerCase().includes(this.searchKeyword.toLowerCase());
      const matchSatuan = !this.filterSatuan || item.satuan === this.filterSatuan;
      return matchSearch && matchSatuan;
    });
  }
  openAddForm() {
    this.isEditing = false;
    this.editingIndex = -1;
    this.formData = { partNumber: "", description: "", satuan: "" };
    this.isFormOpen = true;
  }
  openEditForm(index) {
    const realIndex = this.masterData.indexOf(this.filteredData[index]);
    this.isEditing = true;
    this.editingIndex = realIndex;
    this.formData = __spreadValues({}, this.masterData[realIndex]);
    this.isFormOpen = true;
  }
  closeForm() {
    this.isFormOpen = false;
  }
  saveForm() {
    if (!this.formData.partNumber || !this.formData.description || !this.formData.satuan) {
      return;
    }
    this.formData.satuan = this.formData.satuan.toUpperCase();
    if (this.isEditing && this.editingIndex >= 0) {
      this.masterData[this.editingIndex] = __spreadValues({}, this.formData);
    } else {
      this.masterData.unshift(__spreadValues({}, this.formData));
    }
    this.isFormOpen = false;
  }
  deleteItem(index) {
    const realIndex = this.masterData.indexOf(this.filteredData[index]);
    if (realIndex >= 0) {
      if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        this.masterData.splice(realIndex, 1);
      }
    }
  }
  selectFilterSatuan(val) {
    this.filterSatuan = val;
    this.filterSatuanOpen = false;
  }
  exportData() {
    const headers = ["Part Number", "Material Description", "Satuan"];
    const rows = this.filteredData.map((item) => [
      `"${item.partNumber}"`,
      `"${item.description}"`,
      `"${item.satuan}"`
    ]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "master_data_barang.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  static {
    this.\u0275fac = function MasterBarangComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MasterBarangComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasterBarangComponent, selectors: [["app-master-barang"]], decls: 2, vars: 2, consts: [["class", "master-container", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], [1, "master-container"], [1, "page-header"], [1, "header-actions"], [1, "btn-secondary", 3, "click"], [1, "fa-solid", "fa-download"], [1, "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "filter-bar"], [1, "search-box"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "text", "placeholder", "Cari Part Number atau Deskripsi...", 3, "ngModelChange", "ngModel"], [1, "dropdown-container", "filter-drop"], [1, "custom-select-trigger", 3, "click"], [1, "fa-solid", "fa-filter"], ["class", "dropdown-menu", 4, "ngIf"], [1, "table-container"], ["width", "50"], ["width", "100", 1, "text-center"], ["width", "110", 1, "text-center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "dropdown-menu"], [3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "font-bold", "text-primary-val"], [1, "text-center", "actions-cell"], ["title", "Edit", 1, "btn-action", "edit", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], ["title", "Hapus", 1, "btn-action", "delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], ["colspan", "5", 1, "text-center", "empty-row"], [1, "fa-solid", "fa-box-open"], [1, "form-card"], [1, "form-header"], [1, "master-form"], [1, "form-row"], [1, "form-group", "flex-1"], [1, "required"], ["type", "text", "placeholder", "Contoh: PN-1234A", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: SET, PCS, LTR", 2, "text-transform", "uppercase", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["type", "text", "placeholder", "Masukkan deskripsi material", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click"], [1, "fa-solid", "fa-check"]], template: function MasterBarangComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MasterBarangComponent_div_0_Template, 41, 5, "div", 0)(1, MasterBarangComponent_div_1_Template, 33, 6, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.isFormOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isFormOpen);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.master-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-size: 0.9rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-size: 0.9rem;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 10px 16px;\n  gap: 12px;\n  transition: all 0.2s;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  width: 100%;\n  font-family: inherit;\n  background: transparent;\n}\n.filter-drop[_ngcontent-%COMP%] {\n  min-width: 200px;\n  position: relative;\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fff;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.custom-select-trigger[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n}\n.custom-select-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  transition: transform 0.2s;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 200;\n  padding: 8px 0;\n  animation: _ngcontent-%COMP%_slideDown 0.15s ease-out;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: 0.15s;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f0f9ff;\n  color: var(--primary-color);\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n  flex: 1;\n  min-width: 250px;\n  max-width: 400px;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.summary-icon.blue[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.summary-icon.green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.summary-icon.purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.summary-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-main);\n  line-height: 1.2;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  overflow-x: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n  background-color: white;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid #e2e8f0;\n  padding: 12px;\n}\nth[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  color: #475569;\n  font-weight: 600;\n  text-transform: capitalize;\n  text-align: center;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-primary-val[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid transparent;\n  padding: 6px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.85rem;\n}\n.btn-action.edit[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: #e0f2fe;\n  border-color: #bae6fd;\n}\n.btn-action.delete[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #fca5a5;\n}\n.empty-row[_ngcontent-%COMP%] {\n  padding: 40px 16px !important;\n  color: var(--text-muted);\n}\n.empty-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #cbd5e1;\n  margin-bottom: 8px;\n  display: block;\n}\n.empty-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  max-width: 100%;\n  margin: 0;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 16px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--text-main);\n  margin-bottom: 8px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.master-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-main);\n}\n.required[_ngcontent-%COMP%] {\n  color: #e11d48;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  background-color: #fff;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 16px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n}\n@media (max-width: 1024px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .filter-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filter-drop[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .header-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n    padding: 8px 14px;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%] {\n    padding: 6px;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=master-barang.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MasterBarangComponent, [{
    type: Component,
    args: [{ selector: "app-master-barang", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- LIST VIEW -->
<div class="master-container" *ngIf="!isFormOpen">
  <div class="page-header">
    <div>
      <h2>Master Data Barang</h2>
      <p>Kelola data master barang gudang berikat</p>
    </div>
    <div class="header-actions">
      <button class="btn-secondary" (click)="exportData()">
        <i class="fa-solid fa-download"></i> Unduh Data
      </button>
      <button class="btn-primary" (click)="openAddForm()">
        <i class="fa-solid fa-plus"></i> Tambah Barang
      </button>
    </div>
  </div>

  <!-- Search & Filter -->
  <div class="filter-bar">
    <div class="search-box">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Cari Part Number atau Deskripsi..." [(ngModel)]="searchKeyword">
    </div>
    <div class="dropdown-container filter-drop">
      <div class="custom-select-trigger" (click)="filterSatuanOpen = !filterSatuanOpen">
        <span>{{ filterSatuan || 'Semua Satuan' }}</span>
        <i class="fa-solid fa-filter"></i>
      </div>
      <div class="dropdown-menu" *ngIf="filterSatuanOpen">
        <ul>
          <li (click)="selectFilterSatuan('')">Semua Satuan</li>
          <li *ngFor="let s of uniqueSatuan" (click)="selectFilterSatuan(s)">{{s}}</li>
        </ul>
      </div>
    </div>
  </div>



  <!-- Table -->
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th width="50">No.</th>
          <th>Part Number</th>
          <th>Material Description</th>
          <th width="100" class="text-center">Satuan</th>
          <th width="110" class="text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of filteredData; let i = index">
          <td class="text-center">{{i + 1}}</td>
          <td class="font-bold text-primary-val">{{item.partNumber}}</td>
          <td>{{item.description}}</td>
          <td class="text-center">{{item.satuan}}</td>
          <td class="text-center actions-cell">
            <button class="btn-action edit" (click)="openEditForm(i)" title="Edit">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-action delete" (click)="deleteItem(i)" title="Hapus">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
        <tr *ngIf="filteredData.length === 0">
          <td colspan="5" class="text-center empty-row">
            <i class="fa-solid fa-box-open"></i>
            <p>Tidak ada data ditemukan</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- FORM VIEW -->
<div class="form-card" *ngIf="isFormOpen">
  <div class="form-header">
    <div>
      <h2>{{ isEditing ? 'Edit Data Barang' : 'Tambah Data Barang Baru' }}</h2>
      <p>{{ isEditing ? 'Ubah informasi data master barang' : 'Isi informasi data master barang baru' }}</p>
    </div>
  </div>

  <div class="master-form">
    <div class="form-row">
      <div class="form-group flex-1">
        <label>Part Number <span class="required">*</span></label>
        <input type="text" placeholder="Contoh: PN-1234A" [(ngModel)]="formData.partNumber">
      </div>
      <div class="form-group flex-1">
        <label>Satuan <span class="required">*</span></label>
        <input type="text" placeholder="Contoh: SET, PCS, LTR" [(ngModel)]="formData.satuan" style="text-transform: uppercase;">
      </div>
    </div>

    <div class="form-group">
      <label>Material Description <span class="required">*</span></label>
      <input type="text" placeholder="Masukkan deskripsi material" [(ngModel)]="formData.description">
    </div>
  </div>

  <div class="form-actions">
    <button class="btn-cancel" (click)="closeForm()">Batal</button>
    <button class="btn-submit" (click)="saveForm()">
      <i class="fa-solid fa-check"></i> {{ isEditing ? 'Update' : 'Simpan' }}
    </button>
  </div>
</div>
`, styles: ["/* src/app-frontend/pages/master-barang/master-barang.component.css */\n.master-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-header h2 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.page-header p {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.header-actions {\n  display: flex;\n  gap: 12px;\n}\n.btn-primary {\n  padding: 10px 20px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-size: 0.9rem;\n}\n.btn-primary:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n.btn-secondary {\n  padding: 10px 20px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-size: 0.9rem;\n}\n.btn-secondary:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.filter-bar {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.search-box {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 10px 16px;\n  gap: 12px;\n  transition: all 0.2s;\n}\n.search-box:focus-within {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.search-box i {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  width: 100%;\n  font-family: inherit;\n  background: transparent;\n}\n.filter-drop {\n  min-width: 200px;\n  position: relative;\n}\n.custom-select-trigger {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fff;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.custom-select-trigger:hover {\n  border-color: var(--primary-color);\n}\n.custom-select-trigger i {\n  font-size: 0.8rem;\n  color: #64748b;\n  transition: transform 0.2s;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 200;\n  padding: 8px 0;\n  animation: slideDown 0.15s ease-out;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu li {\n  padding: 10px 16px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: 0.15s;\n}\n.dropdown-menu li:hover {\n  background-color: #f0f9ff;\n  color: var(--primary-color);\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.summary-cards {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.summary-card {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n  flex: 1;\n  min-width: 250px;\n  max-width: 400px;\n}\n.summary-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.summary-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.summary-icon.blue {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.summary-icon.green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.summary-icon.purple {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.summary-info {\n  display: flex;\n  flex-direction: column;\n}\n.summary-value {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-main);\n  line-height: 1.2;\n}\n.summary-label {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-container {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  overflow-x: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n  background-color: white;\n}\nth,\ntd {\n  text-align: center;\n  border: 1px solid #e2e8f0;\n  padding: 12px;\n}\nth {\n  background-color: #f8fafc;\n  color: #475569;\n  font-weight: 600;\n  text-transform: capitalize;\n  text-align: center;\n}\n.text-center {\n  text-align: center;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-primary-val {\n  color: var(--primary-color);\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n}\n.btn-action {\n  background: none;\n  border: 1px solid transparent;\n  padding: 6px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.85rem;\n}\n.btn-action.edit {\n  color: var(--primary-color);\n}\n.btn-action.edit:hover {\n  background: #e0f2fe;\n  border-color: #bae6fd;\n}\n.btn-action.delete {\n  color: #ef4444;\n}\n.btn-action.delete:hover {\n  background: #fee2e2;\n  border-color: #fca5a5;\n}\n.empty-row {\n  padding: 40px 16px !important;\n  color: var(--text-muted);\n}\n.empty-row i {\n  font-size: 2.5rem;\n  color: #cbd5e1;\n  margin-bottom: 8px;\n  display: block;\n}\n.empty-row p {\n  font-size: 0.9rem;\n}\n.form-card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  max-width: 100%;\n  margin: 0;\n}\n.form-header {\n  margin-bottom: 28px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 16px;\n}\n.form-header h2 {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--text-main);\n  margin-bottom: 8px;\n}\n.form-header p {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.master-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-row {\n  display: flex;\n  gap: 24px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.flex-1 {\n  flex: 1;\n}\nlabel {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-main);\n}\n.required {\n  color: #e11d48;\n}\ninput {\n  padding: 12px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  background-color: #fff;\n  font-family: inherit;\n}\ninput:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 16px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-cancel {\n  padding: 12px 24px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel:hover {\n  background: #f8fafc;\n}\n.btn-submit {\n  padding: 12px 24px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.btn-submit:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n}\n@media (max-width: 1024px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .header-actions {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .header-actions button {\n    justify-content: center;\n  }\n  .filter-bar {\n    flex-direction: column;\n  }\n  .filter-drop {\n    width: 100%;\n  }\n  .summary-cards {\n    grid-template-columns: 1fr;\n  }\n  .form-row {\n    flex-direction: column;\n    gap: 20px;\n  }\n  .form-card {\n    padding: 24px 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .header-actions {\n    grid-template-columns: 1fr;\n  }\n  .summary-card {\n    min-width: 100%;\n  }\n  th,\n  td {\n    padding: 8px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .page-header h2 {\n    font-size: 1.15rem;\n  }\n  .page-header p {\n    font-size: 0.82rem;\n  }\n  .btn-primary,\n  .btn-secondary {\n    font-size: 0.82rem;\n    padding: 8px 14px;\n  }\n  .form-card {\n    padding: 16px 12px;\n  }\n  th,\n  td {\n    padding: 6px;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=master-barang.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasterBarangComponent, { className: "MasterBarangComponent", filePath: "src/app-frontend/pages/master-barang/master-barang.component.ts", lineNumber: 12 });
})();
export {
  MasterBarangComponent
};
//# sourceMappingURL=chunk-33UECBJE.js.map
