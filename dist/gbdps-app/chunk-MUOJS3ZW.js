import {
  Router
} from "./chunk-H43VSBM5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/good-receipt/good-receipt-form/good-receipt-form.component.ts
function GoodReceiptFormComponent_div_18_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function GoodReceiptFormComponent_div_18_li_2_Template_li_click_0_listener() {
      const part_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPart(part_r2.partNum));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r2.partNum);
  }
}
function GoodReceiptFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "ul");
    \u0275\u0275template(2, GoodReceiptFormComponent_div_18_li_2_Template, 2, 1, "li", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.partsList);
  }
}
function GoodReceiptFormComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 28);
  }
  if (rf & 2) {
    const sn_r4 = ctx.$implicit;
    \u0275\u0275property("value", sn_r4);
  }
}
function GoodReceiptFormComponent_div_48_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function GoodReceiptFormComponent_div_48_li_2_Template_li_click_0_listener() {
      const u_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setUnit(u_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6);
  }
}
function GoodReceiptFormComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "ul");
    \u0275\u0275template(2, GoodReceiptFormComponent_div_48_li_2_Template, 2, 1, "li", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.units);
  }
}
var GoodReceiptFormComponent = class _GoodReceiptFormComponent {
  constructor(router) {
    this.router = router;
    this.formData = {
      partNumber: "",
      batchNumber: "PRO-2603-0012",
      serialNumber: "",
      quantity: 0,
      unit: "",
      materialDescription: ""
    };
    this.showPartMenu = false;
    this.showUnitMenu = false;
    this.partsList = [
      { partNum: "PN-1001A", desc: "310 LITRE OXYGEN BOTTLE" },
      { partNum: "PN-2022B", desc: "TURBO OIL 2380" },
      { partNum: "PN-9988X", desc: "HYDRAULIC FLUID 41" },
      { partNum: "PN-5566G", desc: "ENGINE GASKET KIT" }
    ];
    this.serialOptions = ["SN-12345", "SN-23456", "SN-34567", "SN-45678", "SN-56789"];
    this.units = ["EA", "SET", "LTR", "CAN", "BOX", "KG"];
  }
  togglePartMenu() {
    this.showPartMenu = !this.showPartMenu;
    this.showUnitMenu = false;
  }
  toggleUnitMenu() {
    this.showUnitMenu = !this.showUnitMenu;
    this.showPartMenu = false;
  }
  setPart(pn) {
    this.formData.partNumber = pn;
    const found = this.partsList.find((p) => p.partNum === pn);
    if (found) {
      this.formData.materialDescription = found.desc;
    }
    this.showPartMenu = false;
  }
  setUnit(u) {
    this.formData.unit = u;
    this.showUnitMenu = false;
  }
  onSubmit() {
    alert("GR Data Saved!");
    this.router.navigate(["/gr-gi/gr"]);
  }
  onCancel() {
    this.router.navigate(["/gr-gi/gr"]);
  }
  static {
    this.\u0275fac = function GoodReceiptFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoodReceiptFormComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoodReceiptFormComponent, selectors: [["app-good-receipt-form"]], decls: 61, vars: 13, consts: [[1, "form-card"], [1, "form-header"], [1, "gr-form", 3, "ngSubmit"], [1, "form-row"], [1, "form-group", "flex-1"], [1, "required"], [1, "dropdown-container", "form-drop"], [1, "custom-select-trigger", "w-100", 3, "click"], [1, "fa-solid", "fa-angle-down"], ["class", "dropdown-menu pt-menu", 4, "ngIf"], [1, "info-text"], [1, "input-readonly-wrapper"], ["type", "text", "disabled", "", "placeholder", "Otomatis terisi...", 1, "readonly-input", 3, "value"], [1, "fa-solid", "fa-lock", "input-icon-right"], [1, "form-group", "flex-2"], ["list", "serial-options", "type", "text", "placeholder", "Ketik atau pilih serial number...", "name", "serialNumber", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["id", "serial-options"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "0", "name", "quantity", "min", "0", 3, "ngModelChange", "ngModel"], [1, "form-group", "mt-3"], ["type", "text", "placeholder", "Isi deskripsi material...", "name", "materialDescription", 3, "ngModelChange", "ngModel"], [1, "form-actions", "mt-4"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit"], [1, "fa-solid", "fa-check"], [1, "dropdown-menu", "pt-menu"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"]], template: function GoodReceiptFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Create Good Receipt (GR)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Pencatatan material receipt sesuai dengan batch dan part number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 2);
        \u0275\u0275listener("ngSubmit", function GoodReceiptFormComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "label");
        \u0275\u0275text(10, "Part Number ");
        \u0275\u0275elementStart(11, "span", 5);
        \u0275\u0275text(12, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 7);
        \u0275\u0275listener("click", function GoodReceiptFormComponent_Template_div_click_14_listener() {
          return ctx.togglePartMenu();
        });
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, GoodReceiptFormComponent_div_18_Template, 3, 1, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 4)(20, "label");
        \u0275\u0275text(21, "Batch Number ");
        \u0275\u0275elementStart(22, "span", 10);
        \u0275\u0275text(23, "(Terisi Otomatis)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275element(25, "input", 12)(26, "i", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 3)(28, "div", 14)(29, "label");
        \u0275\u0275text(30, "Serial Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptFormComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formData.serialNumber, $event) || (ctx.formData.serialNumber = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "datalist", 16);
        \u0275\u0275template(33, GoodReceiptFormComponent_option_33_Template, 1, 1, "option", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 4)(35, "label");
        \u0275\u0275text(36, "Jumlah ");
        \u0275\u0275elementStart(37, "span", 5);
        \u0275\u0275text(38, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptFormComponent_Template_input_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formData.quantity, $event) || (ctx.formData.quantity = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 4)(41, "label");
        \u0275\u0275text(42, "Satuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 6)(44, "div", 7);
        \u0275\u0275listener("click", function GoodReceiptFormComponent_Template_div_click_44_listener() {
          return ctx.toggleUnitMenu();
        });
        \u0275\u0275elementStart(45, "span");
        \u0275\u0275text(46);
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, GoodReceiptFormComponent_div_48_Template, 3, 1, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 19)(50, "label");
        \u0275\u0275text(51, "Material Description ");
        \u0275\u0275elementStart(52, "span", 5);
        \u0275\u0275text(53, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function GoodReceiptFormComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formData.materialDescription, $event) || (ctx.formData.materialDescription = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 21)(56, "button", 22);
        \u0275\u0275listener("click", function GoodReceiptFormComponent_Template_button_click_56_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(57, "Batal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 23);
        \u0275\u0275element(59, "i", 24);
        \u0275\u0275text(60, " Simpan GR ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(ctx.formData.partNumber || "-- Pilih Part Number --");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showPartMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPartMenu);
        \u0275\u0275advance(7);
        \u0275\u0275property("value", ctx.formData.batchNumber);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.serialNumber);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.serialOptions);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.quantity);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.formData.unit || "-- Pilih --");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.showUnitMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showUnitMenu);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.formData.materialDescription);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm], styles: ["\n\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  max-width: 100%;\n  margin: 0;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 16px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--text-main);\n  margin-bottom: 8px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-drop[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: white;\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  cursor: pointer;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 50;\n  padding: 8px 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.9rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f1f5f9;\n}\n.gr-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.flex-2[_ngcontent-%COMP%] {\n  flex: 2;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-main);\n}\n.required[_ngcontent-%COMP%] {\n  color: #e11d48;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  background-color: #fff;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.input-readonly-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.readonly-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f1f5f9;\n  color: #64748b;\n  cursor: not-allowed;\n  border-color: #e2e8f0;\n}\n.input-icon-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  color: #cbd5e1;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 16px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n}\n@media (max-width: 1024px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=good-receipt-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoodReceiptFormComponent, [{
    type: Component,
    args: [{ selector: "app-good-receipt-form", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="form-card">
  <div class="form-header">
    <h2>Create Good Receipt (GR)</h2>
    <p>Pencatatan material receipt sesuai dengan batch dan part number</p>
  </div>

  <form class="gr-form" (ngSubmit)="onSubmit()">
    
    <div class="form-row">
      <div class="form-group flex-1">
        <label>Part Number <span class="required">*</span></label>
        <div class="dropdown-container form-drop">
           <div class="custom-select-trigger w-100" (click)="togglePartMenu()">
             <span>{{formData.partNumber || '-- Pilih Part Number --'}}</span>
             <i class="fa-solid fa-angle-down" [class.rotated]="showPartMenu"></i>
           </div>
           <div class="dropdown-menu pt-menu" *ngIf="showPartMenu">
             <ul>
               <li *ngFor="let part of partsList" (click)="setPart(part.partNum)">{{part.partNum}}</li>
             </ul>
           </div>
        </div>
      </div>

      <div class="form-group flex-1">
        <label>Batch Number <span class="info-text">(Terisi Otomatis)</span></label>
        <div class="input-readonly-wrapper">
          <input type="text" [value]="formData.batchNumber" disabled class="readonly-input" placeholder="Otomatis terisi..." />
          <i class="fa-solid fa-lock input-icon-right"></i>
        </div>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group flex-2">
        <label>Serial Number</label>
        <input list="serial-options" type="text" placeholder="Ketik atau pilih serial number..." [(ngModel)]="formData.serialNumber" name="serialNumber" autocomplete="off">
        <datalist id="serial-options">
          <option *ngFor="let sn of serialOptions" [value]="sn"></option>
        </datalist>
      </div>
      
      <div class="form-group flex-1">
        <label>Jumlah <span class="required">*</span></label>
        <input type="number" placeholder="0" [(ngModel)]="formData.quantity" name="quantity" min="0">
      </div>

      <div class="form-group flex-1">
        <label>Satuan</label>
        <div class="dropdown-container form-drop">
           <div class="custom-select-trigger w-100" (click)="toggleUnitMenu()">
             <span>{{formData.unit || '-- Pilih --'}}</span>
             <i class="fa-solid fa-angle-down" [class.rotated]="showUnitMenu"></i>
           </div>
           <div class="dropdown-menu pt-menu" *ngIf="showUnitMenu">
             <ul>
               <li *ngFor="let u of units" (click)="setUnit(u)">{{u}}</li>
             </ul>
           </div>
        </div>
      </div>
    </div>

    <div class="form-group mt-3">
      <label>Material Description <span class="required">*</span></label>
      <input type="text" placeholder="Isi deskripsi material..." [(ngModel)]="formData.materialDescription" name="materialDescription">
    </div>

    <div class="form-actions mt-4">
      <button type="button" class="btn-cancel" (click)="onCancel()">Batal</button>
      <button type="submit" class="btn-submit">
        <i class="fa-solid fa-check"></i>
        Simpan GR
      </button>
    </div>
  </form>
</div>
`, styles: ["/* src/app-frontend/pages/good-receipt/good-receipt-form/good-receipt-form.component.css */\n.form-card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  padding: 32px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  max-width: 100%;\n  margin: 0;\n}\n.form-header {\n  margin-bottom: 32px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 16px;\n}\n.form-header h2 {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--text-main);\n  margin-bottom: 8px;\n}\n.form-header p {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.dropdown-container {\n  position: relative;\n}\n.form-drop {\n  width: 100%;\n}\n.w-100 {\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: white;\n}\n.custom-select-trigger {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  cursor: pointer;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 50;\n  padding: 8px 0;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu li {\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.9rem;\n}\n.dropdown-menu li:hover {\n  background-color: #f1f5f9;\n}\n.gr-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-row {\n  display: flex;\n  gap: 24px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.flex-1 {\n  flex: 1;\n}\n.flex-2 {\n  flex: 2;\n}\nlabel {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-main);\n}\n.required {\n  color: #e11d48;\n}\n.info-text {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 400;\n}\ninput,\nselect,\ntextarea {\n  padding: 12px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: var(--text-main);\n  transition: all 0.2s;\n  background-color: #fff;\n  font-family: inherit;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.input-readonly-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.readonly-input {\n  width: 100%;\n  background-color: #f1f5f9;\n  color: #64748b;\n  cursor: not-allowed;\n  border-color: #e2e8f0;\n}\n.input-icon-right {\n  position: absolute;\n  right: 16px;\n  color: #cbd5e1;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 16px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-cancel {\n  padding: 12px 24px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel:hover {\n  background: #f8fafc;\n}\n.btn-submit {\n  padding: 12px 24px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.btn-submit:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n}\n@media (max-width: 1024px) {\n  .form-card {\n    padding: 24px 16px;\n  }\n  .form-row {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=good-receipt-form.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoodReceiptFormComponent, { className: "GoodReceiptFormComponent", filePath: "src/app-frontend/pages/good-receipt/good-receipt-form/good-receipt-form.component.ts", lineNumber: 13 });
})();
export {
  GoodReceiptFormComponent
};
//# sourceMappingURL=chunk-MUOJS3ZW.js.map
