import {
  FormsModule
} from "./chunk-BXD7PU4O.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/upload-bc/upload-bc.component.ts
var UploadBCComponent = class _UploadBCComponent {
  constructor() {
    this.isDragging = false;
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
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      console.log("Files dropped:", files[0].name);
    }
  }
  onUpload() {
    alert("Data BC uploaded successfully!");
  }
  static {
    this.\u0275fac = function UploadBCComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadBCComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadBCComponent, selectors: [["app-upload-bc"]], decls: 34, vars: 2, consts: [[1, "form-card"], [1, "form-header"], [1, "upload-container"], [1, "note-box", "mb-24"], [1, "fa-solid", "fa-circle-info"], [1, "form-group"], [1, "dropzone", 3, "dragover", "dragleave", "drop"], [1, "drop-icon"], [1, "fa-solid", "fa-cloud-arrow-up"], [1, "file-hint"], [1, "form-actions", "mt-32"], [1, "btn-delete"], [1, "btn-upload", 3, "click"], [1, "fa-solid", "fa-upload"]], template: function UploadBCComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Upload Data BC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Unggah file Data BC (Excel/CSV) untuk masuk ke Pemasukan/Pengeluaran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3);
        \u0275\u0275element(8, "i", 4);
        \u0275\u0275elementStart(9, "span")(10, "strong");
        \u0275\u0275text(11, "Catatan:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Pastikan file excel yang diunggah berasal dari sistem ");
        \u0275\u0275elementStart(13, "strong");
        \u0275\u0275text(14, "CEISA");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, ".");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 5)(17, "label");
        \u0275\u0275text(18, "File Data BC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 6);
        \u0275\u0275listener("dragover", function UploadBCComponent_Template_div_dragover_19_listener($event) {
          return ctx.onDragOver($event);
        })("dragleave", function UploadBCComponent_Template_div_dragleave_19_listener() {
          return ctx.onDragLeave();
        })("drop", function UploadBCComponent_Template_div_drop_19_listener($event) {
          return ctx.onDrop($event);
        });
        \u0275\u0275elementStart(20, "div", 7);
        \u0275\u0275element(21, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "h3");
        \u0275\u0275text(23, "Drag & drop file disini");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, "atau klik untuk memilih file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 9);
        \u0275\u0275text(27, "Format: Excel, CSV (Maks. 50MB)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 10)(29, "button", 11);
        \u0275\u0275text(30, "Hapus");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 12);
        \u0275\u0275listener("click", function UploadBCComponent_Template_button_click_31_listener() {
          return ctx.onUpload();
        });
        \u0275\u0275element(32, "i", 13);
        \u0275\u0275text(33, " Upload Data BC ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275classProp("active", ctx.isDragging);
      }
    }, dependencies: [CommonModule, FormsModule], styles: ["\n\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 12px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-main);\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: white;\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.sel-val[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.icon-sel[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 50;\n  padding: 8px 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.95rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f1f5f9;\n}\n.dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #bae6fd;\n  border-radius: 12px;\n  padding: 32px 16px;\n  text-align: center;\n  background: #f0f9ff66;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.dropzone.active[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  background: #f0f9ff;\n}\n.drop-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #bae6fd;\n  margin-bottom: 12px;\n}\n.dropzone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.dropzone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-bottom: 8px;\n}\n.file-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 8px;\n  display: inline-block;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  padding: 10px 32px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-upload[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.mb-24[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mt-32[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.note-box[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  border-left: 4px solid #3b82f6;\n  padding: 12px 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  color: #1e3a8a;\n  font-size: 0.95rem;\n}\n.note-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-size: 1.25rem;\n  margin-top: 2px;\n}\n@media (max-width: 1024px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .dropzone[_ngcontent-%COMP%] {\n    padding: 32px 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=upload-bc.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadBCComponent, [{
    type: Component,
    args: [{ selector: "app-upload-bc", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="form-card">\n  <div class="form-header">\n    <h2>Upload Data BC</h2>\n    <p>Unggah file Data BC (Excel/CSV) untuk masuk ke Pemasukan/Pengeluaran</p>\n  </div>\n\n  <div class="upload-container">\n    <div class="note-box mb-24">\n      <i class="fa-solid fa-circle-info"></i>\n      <span><strong>Catatan:</strong> Pastikan file excel yang diunggah berasal dari sistem <strong>CEISA</strong>.</span>\n    </div>\n\n    <div class="form-group">\n      <label>File Data BC</label>\n      <div class="dropzone" \n           [class.active]="isDragging"\n           (dragover)="onDragOver($event)"\n           (dragleave)="onDragLeave()"\n           (drop)="onDrop($event)">\n        <div class="drop-icon">\n          <i class="fa-solid fa-cloud-arrow-up"></i>\n        </div>\n        <h3>Drag & drop file disini</h3>\n        <p>atau klik untuk memilih file</p>\n        <span class="file-hint">Format: Excel, CSV (Maks. 50MB)</span>\n      </div>\n    </div>\n\n    <div class="form-actions mt-32">\n      <button class="btn-delete">Hapus</button>\n      <button class="btn-upload" (click)="onUpload()">\n        <i class="fa-solid fa-upload"></i>\n        Upload Data BC\n      </button>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app-frontend/pages/upload-bc/upload-bc.component.css */\n.form-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.form-header {\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 12px;\n}\n.form-header h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.form-header p {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n.form-group label {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-main);\n}\n.dropdown-container {\n  position: relative;\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: white;\n}\n.custom-select-trigger {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.sel-val {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.icon-sel {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 50;\n  padding: 8px 0;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu li {\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.95rem;\n}\n.dropdown-menu li:hover {\n  background-color: #f1f5f9;\n}\n.dropzone {\n  border: 2px dashed #bae6fd;\n  border-radius: 12px;\n  padding: 32px 16px;\n  text-align: center;\n  background: #f0f9ff66;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.dropzone.active {\n  border-color: var(--primary-color);\n  background: #f0f9ff;\n}\n.drop-icon {\n  font-size: 2.5rem;\n  color: #bae6fd;\n  margin-bottom: 12px;\n}\n.dropzone h3 {\n  font-size: 1.1rem;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.dropzone p {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-bottom: 8px;\n}\n.file-hint {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 8px;\n  display: inline-block;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.btn-delete {\n  padding: 10px 32px;\n  background: #ef4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-upload {\n  padding: 10px 24px;\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.mb-24 {\n  margin-bottom: 16px;\n}\n.mt-32 {\n  margin-top: 24px;\n}\n.note-box {\n  background-color: #eff6ff;\n  border-left: 4px solid #3b82f6;\n  padding: 12px 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  color: #1e3a8a;\n  font-size: 0.95rem;\n}\n.note-box i {\n  color: #3b82f6;\n  font-size: 1.25rem;\n  margin-top: 2px;\n}\n@media (max-width: 1024px) {\n  .form-card {\n    padding: 24px 16px;\n  }\n  .dropzone {\n    padding: 32px 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=upload-bc.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadBCComponent, { className: "UploadBCComponent", filePath: "src/app-frontend/pages/upload-bc/upload-bc.component.ts", lineNumber: 12 });
})();
export {
  UploadBCComponent
};
//# sourceMappingURL=chunk-SCOLGDG7.js.map
