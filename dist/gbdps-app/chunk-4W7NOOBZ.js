import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
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

// src/app-frontend/pages/adjustment/adjustment.component.ts
function AdjustmentComponent_div_18_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275listener("click", function AdjustmentComponent_div_18_li_2_Template_li_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTipeBC(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function AdjustmentComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "ul");
    \u0275\u0275template(2, AdjustmentComponent_div_18_li_2_Template, 2, 1, "li", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.tipeBCOptions);
  }
}
function AdjustmentComponent_div_29_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275listener("click", function AdjustmentComponent_div_29_li_2_Template_li_click_0_listener() {
      const n_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setNoDaftar(n_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5);
  }
}
function AdjustmentComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "ul");
    \u0275\u0275template(2, AdjustmentComponent_div_29_li_2_Template, 2, 1, "li", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.noDaftarOptions);
  }
}
var AdjustmentComponent = class _AdjustmentComponent {
  constructor() {
    this.showTipeBCMenu = false;
    this.showNoDaftarMenu = false;
    this.tipeBCOptions = ["BC 2.0", "BC 2.3", "BC 2.5", "BC 2.7"];
    this.noDaftarOptions = ["001/BC2.0/2024", "002/BC2.0/2024", "003/BC2.3/2024"];
    this.formData = {
      tipeBC: "",
      noDaftar: "",
      kodeBarang: "",
      nomorAJU: "",
      jumlah: null,
      satuan: ""
    };
  }
  toggleTipeBCMenu() {
    this.showTipeBCMenu = !this.showTipeBCMenu;
    this.showNoDaftarMenu = false;
  }
  toggleNoDaftarMenu() {
    if (!this.formData.tipeBC)
      return;
    this.showNoDaftarMenu = !this.showNoDaftarMenu;
    this.showTipeBCMenu = false;
  }
  setTipeBC(value) {
    this.formData.tipeBC = value;
    this.formData.noDaftar = "";
    this.showTipeBCMenu = false;
  }
  setNoDaftar(value) {
    this.formData.noDaftar = value;
    this.showNoDaftarMenu = false;
  }
  onSubmit() {
    console.log("Adjustment submitted:", this.formData);
  }
  onReset() {
    this.formData = {
      tipeBC: "",
      noDaftar: "",
      kodeBarang: "",
      nomorAJU: "",
      jumlah: null,
      satuan: ""
    };
    this.showTipeBCMenu = false;
    this.showNoDaftarMenu = false;
  }
  static {
    this.\u0275fac = function AdjustmentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdjustmentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdjustmentComponent, selectors: [["app-adjustment"]], decls: 54, vars: 18, consts: [[1, "form-card"], [1, "form-header"], [1, "adj-form", 3, "ngSubmit"], [1, "form-row-2"], [1, "form-group"], [1, "required"], [1, "dropdown-container", "form-drop"], [1, "custom-select-trigger", 3, "click"], [1, "fa-solid", "fa-angle-down"], ["class", "dropdown-menu", 4, "ngIf"], ["type", "text", "name", "kodeBarang", "placeholder", "Masukkan kode barang...", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "nomorAJU", "placeholder", "Masukkan nomor AJU...", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "jumlah", "placeholder", "0", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "satuan", "placeholder", "Contoh: PCS, SET, LTR...", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit"], [1, "fa-solid", "fa-check"], [1, "dropdown-menu"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function AdjustmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Adjustment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Penyesuaian data barang berdasarkan Tipe BC dan Nomor Daftar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 2);
        \u0275\u0275listener("ngSubmit", function AdjustmentComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "label");
        \u0275\u0275text(10, "Tipe BC ");
        \u0275\u0275elementStart(11, "span", 5);
        \u0275\u0275text(12, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 7);
        \u0275\u0275listener("click", function AdjustmentComponent_Template_div_click_14_listener() {
          return ctx.toggleTipeBCMenu();
        });
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, AdjustmentComponent_div_18_Template, 3, 1, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 4)(20, "label");
        \u0275\u0275text(21, "No. Daftar ");
        \u0275\u0275elementStart(22, "span", 5);
        \u0275\u0275text(23, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 6)(25, "div", 7);
        \u0275\u0275listener("click", function AdjustmentComponent_Template_div_click_25_listener() {
          return ctx.toggleNoDaftarMenu();
        });
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, AdjustmentComponent_div_29_Template, 3, 1, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 3)(31, "div", 4)(32, "label");
        \u0275\u0275text(33, "Kode Barang");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AdjustmentComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formData.kodeBarang, $event) || (ctx.formData.kodeBarang = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 4)(36, "label");
        \u0275\u0275text(37, "Nomor AJU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AdjustmentComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formData.nomorAJU, $event) || (ctx.formData.nomorAJU = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 3)(40, "div", 4)(41, "label");
        \u0275\u0275text(42, "Jumlah");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function AdjustmentComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formData.jumlah, $event) || (ctx.formData.jumlah = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 4)(45, "label");
        \u0275\u0275text(46, "Satuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AdjustmentComponent_Template_input_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formData.satuan, $event) || (ctx.formData.satuan = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 14)(49, "button", 15);
        \u0275\u0275listener("click", function AdjustmentComponent_Template_button_click_49_listener() {
          return ctx.onReset();
        });
        \u0275\u0275text(50, "Reset");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 16);
        \u0275\u0275element(52, "i", 17);
        \u0275\u0275text(53, " Submit ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275classProp("placeholder", !ctx.formData.tipeBC);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.formData.tipeBC || "-- Pilih Tipe BC --");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showTipeBCMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showTipeBCMenu);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("disabled", !ctx.formData.tipeBC);
        \u0275\u0275advance();
        \u0275\u0275classProp("placeholder", !ctx.formData.noDaftar);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.formData.noDaftar || (ctx.formData.tipeBC ? "-- Pilih No. Daftar --" : "Pilih Tipe BC Dahulu"), " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showNoDaftarMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNoDaftarMenu && ctx.formData.tipeBC);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.kodeBarang);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.nomorAJU);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.jumlah);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.satuan);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm], styles: ["\n\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  padding: 18px 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  max-width: 100%;\n  margin: 0;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 10px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.82rem;\n}\n.adj-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-main);\n}\n.required[_ngcontent-%COMP%] {\n  color: #e11d48;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  background-color: #fff;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-drop[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fff;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.custom-select-trigger[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n}\n.custom-select-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.custom-select-trigger.disabled[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n  color: #94a3b8;\n  border-color: #e2e8f0;\n}\n.placeholder[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 200;\n  padding: 8px 0;\n  animation: _ngcontent-%COMP%_slideDown 0.15s ease-out;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: 0.15s;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f0f9ff;\n  color: var(--primary-color);\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 4px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-size: 0.95rem;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.95rem;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n@media (max-width: 1024px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .form-row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n}\n/*# sourceMappingURL=adjustment.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdjustmentComponent, [{
    type: Component,
    args: [{ selector: "app-adjustment", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="form-card">
  <div class="form-header">
    <h2>Adjustment</h2>
    <p>Penyesuaian data barang berdasarkan Tipe BC dan Nomor Daftar</p>
  </div>

  <form class="adj-form" (ngSubmit)="onSubmit()">

    <!-- Row 1: Tipe BC + No Daftar -->
    <div class="form-row-2">
      <div class="form-group">
        <label>Tipe BC <span class="required">*</span></label>
        <div class="dropdown-container form-drop">
          <div class="custom-select-trigger" (click)="toggleTipeBCMenu()">
            <span [class.placeholder]="!formData.tipeBC">{{ formData.tipeBC || '-- Pilih Tipe BC --' }}</span>
            <i class="fa-solid fa-angle-down" [class.rotated]="showTipeBCMenu"></i>
          </div>
          <div class="dropdown-menu" *ngIf="showTipeBCMenu">
            <ul>
              <li *ngFor="let t of tipeBCOptions" (click)="setTipeBC(t)">{{ t }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label>No. Daftar <span class="required">*</span></label>
        <div class="dropdown-container form-drop">
          <div class="custom-select-trigger" [class.disabled]="!formData.tipeBC" (click)="toggleNoDaftarMenu()">
            <span [class.placeholder]="!formData.noDaftar">
              {{ formData.noDaftar || (formData.tipeBC ? '-- Pilih No. Daftar --' : 'Pilih Tipe BC Dahulu') }}
            </span>
            <i class="fa-solid fa-angle-down" [class.rotated]="showNoDaftarMenu"></i>
          </div>
          <div class="dropdown-menu" *ngIf="showNoDaftarMenu && formData.tipeBC">
            <ul>
              <li *ngFor="let n of noDaftarOptions" (click)="setNoDaftar(n)">{{ n }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2: Kode Barang + Nomor AJU -->
    <div class="form-row-2">
      <div class="form-group">
        <label>Kode Barang</label>
        <input type="text" [(ngModel)]="formData.kodeBarang" name="kodeBarang" placeholder="Masukkan kode barang...">
      </div>
      <div class="form-group">
        <label>Nomor AJU</label>
        <input type="text" [(ngModel)]="formData.nomorAJU" name="nomorAJU" placeholder="Masukkan nomor AJU...">
      </div>
    </div>

    <!-- Row 3: Jumlah + Satuan -->
    <div class="form-row-2">
      <div class="form-group">
        <label>Jumlah</label>
        <input type="number" [(ngModel)]="formData.jumlah" name="jumlah" placeholder="0" min="0">
      </div>
      <div class="form-group">
        <label>Satuan</label>
        <input type="text" [(ngModel)]="formData.satuan" name="satuan" placeholder="Contoh: PCS, SET, LTR...">
      </div>
    </div>

    <!-- Actions -->
    <div class="form-actions">
      <button type="button" class="btn-cancel" (click)="onReset()">Reset</button>
      <button type="submit" class="btn-submit">
        <i class="fa-solid fa-check"></i>
        Submit
      </button>
    </div>

  </form>
</div>
`, styles: ["/* src/app-frontend/pages/adjustment/adjustment.component.css */\n.form-card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  padding: 18px 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  max-width: 100%;\n  margin: 0;\n}\n.form-header {\n  margin-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 10px;\n}\n.form-header h2 {\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.form-header p {\n  color: var(--text-muted);\n  font-size: 0.82rem;\n}\n.adj-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\nlabel {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-main);\n}\n.required {\n  color: #e11d48;\n}\ninput,\nselect {\n  padding: 9px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  background-color: #fff;\n  font-family: inherit;\n}\ninput:focus,\nselect:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.dropdown-container {\n  position: relative;\n}\n.form-drop {\n  width: 100%;\n}\n.custom-select-trigger {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fff;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.custom-select-trigger:hover {\n  border-color: var(--primary-color);\n}\n.custom-select-trigger i {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.custom-select-trigger.disabled {\n  background: #f1f5f9;\n  cursor: not-allowed;\n  color: #94a3b8;\n  border-color: #e2e8f0;\n}\n.placeholder {\n  color: #94a3b8;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 200;\n  padding: 8px 0;\n  animation: slideDown 0.15s ease-out;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu li {\n  padding: 10px 16px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  transition: 0.15s;\n}\n.dropdown-menu li:hover {\n  background-color: #f0f9ff;\n  color: var(--primary-color);\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 4px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-submit {\n  padding: 12px 24px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-size: 0.95rem;\n}\n.btn-submit:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n}\n.btn-cancel {\n  padding: 12px 24px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.95rem;\n}\n.btn-cancel:hover {\n  background: #f8fafc;\n}\n@media (max-width: 1024px) {\n  .form-card {\n    padding: 24px 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .form-row-2 {\n    grid-template-columns: 1fr;\n  }\n  .form-card {\n    padding: 16px 12px;\n  }\n}\n/*# sourceMappingURL=adjustment.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdjustmentComponent, { className: "AdjustmentComponent", filePath: "src/app-frontend/pages/adjustment/adjustment.component.ts", lineNumber: 12 });
})();
export {
  AdjustmentComponent
};
//# sourceMappingURL=chunk-4W7NOOBZ.js.map
