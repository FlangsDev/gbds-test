import {
  FormsModule
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
  ɵɵtextInterpolate1
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/upload-scan/upload-scan.component.ts
function UploadScanComponent_div_18_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275listener("click", function UploadScanComponent_div_18_li_2_Template_li_click_0_listener() {
      const bc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBC(bc_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bc_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("BC ", bc_r2, "");
  }
}
function UploadScanComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "ul");
    \u0275\u0275template(2, UploadScanComponent_div_18_li_2_Template, 2, 1, "li", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.bcs);
  }
}
function UploadScanComponent_div_29_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275listener("click", function UploadScanComponent_div_29_li_2_Template_li_click_0_listener() {
      const aju_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setAJU(aju_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aju_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(aju_r5);
  }
}
function UploadScanComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "ul");
    \u0275\u0275template(2, UploadScanComponent_div_29_li_2_Template, 2, 1, "li", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.ajus);
  }
}
var UploadScanComponent = class _UploadScanComponent {
  constructor() {
    this.selectedBC = "";
    this.selectedAJU = "";
    this.isDragging = false;
    this.showBCMenu = false;
    this.showAJUMenu = false;
    this.bcs = ["2.3", "2.5", "2.6", "2.7", "4.0"];
    this.ajus = ["AJU-001", "AJU-002", "AJU-003", "AJU-004"];
  }
  toggleBCMenu() {
    this.showBCMenu = !this.showBCMenu;
    this.showAJUMenu = false;
  }
  toggleAJUMenu() {
    this.showAJUMenu = !this.showAJUMenu;
    this.showBCMenu = false;
  }
  setBC(bc) {
    this.selectedBC = bc;
    this.showBCMenu = false;
  }
  setAJU(aju) {
    this.selectedAJU = aju;
    this.showAJUMenu = false;
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave() {
    this.isDragging = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragging = false;
  }
  onUpload() {
    if (!this.selectedBC || !this.selectedAJU) {
      alert("Lengkapi field BC dan No. AJU terlebih dahulu!");
      return;
    }
    alert("Dokumen Scan uploaded successfully!");
  }
  static {
    this.\u0275fac = function UploadScanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadScanComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadScanComponent, selectors: [["app-upload-scan"]], decls: 48, vars: 10, consts: [[1, "form-card"], [1, "form-header"], [1, "upload-container"], [1, "form-grid"], [1, "form-group", "flex-1"], [1, "dropdown-container"], [1, "custom-select-trigger", "w-100", 3, "click"], [1, "sel-val"], [1, "fa-solid", "fa-file-invoice", "icon-sel"], [1, "fa-solid", "fa-angle-down"], ["class", "dropdown-menu pt-menu", 4, "ngIf"], [1, "fa-solid", "fa-hashtag", "icon-sel"], [1, "form-group", "mt-24"], [1, "dropzone", 3, "dragover", "dragleave", "drop"], [1, "drop-icon"], [1, "fa-solid", "fa-cloud-arrow-up"], [1, "file-hint"], [1, "form-actions", "mt-32"], [1, "btn-delete"], [1, "btn-upload", 3, "click"], [1, "fa-solid", "fa-upload"], [1, "dropdown-menu", "pt-menu"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function UploadScanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Upload Scan Dokumen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Lengkapi field berikut untuk mengunggah scan dokumen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "label");
        \u0275\u0275text(10, "Pilih BC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
        \u0275\u0275listener("click", function UploadScanComponent_Template_div_click_12_listener() {
          return ctx.toggleBCMenu();
        });
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275element(14, "i", 8);
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, UploadScanComponent_div_18_Template, 3, 1, "div", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 4)(20, "label");
        \u0275\u0275text(21, "Pilih No AJU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 5)(23, "div", 6);
        \u0275\u0275listener("click", function UploadScanComponent_Template_div_click_23_listener() {
          return ctx.toggleAJUMenu();
        });
        \u0275\u0275elementStart(24, "div", 7);
        \u0275\u0275element(25, "i", 11);
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, UploadScanComponent_div_29_Template, 3, 1, "div", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 12)(31, "label");
        \u0275\u0275text(32, "Upload File");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 13);
        \u0275\u0275listener("dragover", function UploadScanComponent_Template_div_dragover_33_listener($event) {
          return ctx.onDragOver($event);
        })("dragleave", function UploadScanComponent_Template_div_dragleave_33_listener() {
          return ctx.onDragLeave();
        })("drop", function UploadScanComponent_Template_div_drop_33_listener($event) {
          return ctx.onDrop($event);
        });
        \u0275\u0275elementStart(34, "div", 14);
        \u0275\u0275element(35, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h3");
        \u0275\u0275text(37, "Drag & drop file disini");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "atau klik untuk memilih file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 16);
        \u0275\u0275text(41, "Format: PDF, Excel, JPG, PNG (Maks. 10MB)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 17)(43, "button", 18);
        \u0275\u0275text(44, "Hapus");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 19);
        \u0275\u0275listener("click", function UploadScanComponent_Template_button_click_45_listener() {
          return ctx.onUpload();
        });
        \u0275\u0275element(46, "i", 20);
        \u0275\u0275text(47, " Upload Dokumen ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(ctx.selectedBC ? "BC " + ctx.selectedBC : "-- Pilih Jenis BC --");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showBCMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBCMenu);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.selectedAJU || "-- Pilih No AJU --");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showAJUMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAJUMenu);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.isDragging);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ["\n\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 12px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-main);\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: white;\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.sel-val[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.icon-sel[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 50;\n  padding: 8px 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.95rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f1f5f9;\n}\n.dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #bae6fd;\n  border-radius: 12px;\n  padding: 32px 16px;\n  text-align: center;\n  background: #f0f9ff66;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.dropzone.active[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  background: #f0f9ff;\n}\n.drop-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #bae6fd;\n  margin-bottom: 12px;\n}\n.dropzone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.dropzone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-bottom: 8px;\n}\n.file-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  padding: 10px 32px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-upload[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mt-32[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 1024px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .dropzone[_ngcontent-%COMP%] {\n    padding: 32px 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=upload-scan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadScanComponent, [{
    type: Component,
    args: [{ selector: "app-upload-scan", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="form-card">
  <div class="form-header">
    <h2>Upload Scan Dokumen</h2>
    <p>Lengkapi field berikut untuk mengunggah scan dokumen</p>
  </div>

  <div class="upload-container">
    <div class="form-grid">
      <div class="form-group flex-1">
        <label>Pilih BC</label>
        <div class="dropdown-container">
           <div class="custom-select-trigger w-100" (click)="toggleBCMenu()">
             <div class="sel-val">
               <i class="fa-solid fa-file-invoice icon-sel"></i>
               <span>{{selectedBC ? 'BC ' + selectedBC : '-- Pilih Jenis BC --'}}</span>
             </div>
             <i class="fa-solid fa-angle-down" [class.rotated]="showBCMenu"></i>
           </div>
           <div class="dropdown-menu pt-menu" *ngIf="showBCMenu">
             <ul>
               <li *ngFor="let bc of bcs" (click)="setBC(bc)">BC {{bc}}</li>
             </ul>
           </div>
        </div>
      </div>

      <div class="form-group flex-1">
        <label>Pilih No AJU</label>
        <div class="dropdown-container">
           <div class="custom-select-trigger w-100" (click)="toggleAJUMenu()">
             <div class="sel-val">
               <i class="fa-solid fa-hashtag icon-sel"></i>
               <span>{{selectedAJU || '-- Pilih No AJU --'}}</span>
             </div>
             <i class="fa-solid fa-angle-down" [class.rotated]="showAJUMenu"></i>
           </div>
           <div class="dropdown-menu pt-menu" *ngIf="showAJUMenu">
             <ul>
               <li *ngFor="let aju of ajus" (click)="setAJU(aju)">{{aju}}</li>
             </ul>
           </div>
        </div>
      </div>
    </div>

    <div class="form-group mt-24">
      <label>Upload File</label>
      <div class="dropzone" 
           [class.active]="isDragging"
           (dragover)="onDragOver($event)"
           (dragleave)="onDragLeave()"
           (drop)="onDrop($event)">
        <div class="drop-icon">
          <i class="fa-solid fa-cloud-arrow-up"></i>
        </div>
        <h3>Drag & drop file disini</h3>
        <p>atau klik untuk memilih file</p>
        <span class="file-hint">Format: PDF, Excel, JPG, PNG (Maks. 10MB)</span>
      </div>
    </div>

    <div class="form-actions mt-32">
      <button class="btn-delete">Hapus</button>
      <button class="btn-upload" (click)="onUpload()">
        <i class="fa-solid fa-upload"></i>
        Upload Dokumen
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app-frontend/pages/upload-scan/upload-scan.component.css */\n.form-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.form-header {\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 12px;\n}\n.form-header h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.form-header p {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.form-grid {\n  display: flex;\n  gap: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n.form-group label {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-main);\n}\n.dropdown-container {\n  position: relative;\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: white;\n}\n.custom-select-trigger {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.sel-val {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.icon-sel {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 50;\n  padding: 8px 0;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu li {\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.95rem;\n}\n.dropdown-menu li:hover {\n  background-color: #f1f5f9;\n}\n.dropzone {\n  border: 2px dashed #bae6fd;\n  border-radius: 12px;\n  padding: 32px 16px;\n  text-align: center;\n  background: #f0f9ff66;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.dropzone.active {\n  border-color: var(--primary-color);\n  background: #f0f9ff;\n}\n.drop-icon {\n  font-size: 2.5rem;\n  color: #bae6fd;\n  margin-bottom: 12px;\n}\n.dropzone h3 {\n  font-size: 1.1rem;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.dropzone p {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-bottom: 8px;\n}\n.file-hint {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.btn-delete {\n  padding: 10px 32px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-upload {\n  padding: 10px 24px;\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.mt-24 {\n  margin-top: 16px;\n}\n.mt-32 {\n  margin-top: 24px;\n}\n.flex-1 {\n  flex: 1;\n}\n@media (max-width: 1024px) {\n  .form-card {\n    padding: 24px 16px;\n  }\n  .form-grid {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .dropzone {\n    padding: 32px 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=upload-scan.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadScanComponent, { className: "UploadScanComponent", filePath: "src/app-frontend/pages/upload-scan/upload-scan.component.ts", lineNumber: 12 });
})();
export {
  UploadScanComponent
};
//# sourceMappingURL=chunk-X77I6QWJ.js.map
