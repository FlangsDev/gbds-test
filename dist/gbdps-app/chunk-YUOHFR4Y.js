import {
  Router
} from "./chunk-H43VSBM5.js";
import {
  DefaultValueAccessor,
  FormsModule,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/good-issue/good-issue-form/good-issue-form.component.ts
function GoodIssueFormComponent_tr_78_div_9_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function GoodIssueFormComponent_tr_78_div_9_li_2_Template_li_click_0_listener() {
      const b_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const item_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectItemBatch(item_r2, b_r5.batchNo));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r5.batchNo);
  }
}
function GoodIssueFormComponent_tr_78_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "ul");
    \u0275\u0275template(2, GoodIssueFormComponent_tr_78_div_9_li_2_Template, 2, 1, "li", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.batchesDb);
  }
}
function GoodIssueFormComponent_tr_78_div_29_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function GoodIssueFormComponent_tr_78_div_29_li_2_Template_li_click_0_listener() {
      const curr_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const item_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectItemCurrency(item_r2, curr_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const curr_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(curr_r7);
  }
}
function GoodIssueFormComponent_tr_78_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "ul");
    \u0275\u0275template(2, GoodIssueFormComponent_tr_78_div_29_li_2_Template, 2, 1, "li", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.currencies);
  }
}
function GoodIssueFormComponent_tr_78_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function GoodIssueFormComponent_tr_78_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const i_r9 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItemRow(i_r9));
    });
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementEnd();
  }
}
function GoodIssueFormComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 45)(5, "div", 46);
    \u0275\u0275listener("click", function GoodIssueFormComponent_tr_78_Template_div_click_5_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItemBatchMenu(item_r2));
    });
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, GoodIssueFormComponent_tr_78_div_9_Template, 3, 1, "div", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_78_Template_input_ngModelChange_11_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.partNumber, $event) || (item_r2.partNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_78_Template_input_ngModelChange_13_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.description, $event) || (item_r2.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_78_Template_input_ngModelChange_15_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.serialNumber, $event) || (item_r2.serialNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_78_Template_input_ngModelChange_17_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.workOrderNumber, $event) || (item_r2.workOrderNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_78_Template_input_ngModelChange_19_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.qty, $event) || (item_r2.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_78_Template_input_ngModelChange_21_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.unit, $event) || (item_r2.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "div", 55)(24, "div", 56)(25, "div", 57);
    \u0275\u0275listener("click", function GoodIssueFormComponent_tr_78_Template_div_click_25_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItemCurrencyMenu(item_r2));
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, GoodIssueFormComponent_tr_78_div_29_Template, 3, 1, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_78_Template_input_ngModelChange_30_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.valueCustom, $event) || (item_r2.valueCustom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "td", 44);
    \u0275\u0275template(32, GoodIssueFormComponent_tr_78_button_32_Template, 2, 0, "button", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.no);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.batchNumber || "-- Select --");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", item_r2.showBatchMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.showBatchMenu);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "pn_", i_r9, "");
    \u0275\u0275twoWayProperty("ngModel", item_r2.partNumber);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "desc_", i_r9, "");
    \u0275\u0275twoWayProperty("ngModel", item_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "sn_", i_r9, "");
    \u0275\u0275twoWayProperty("ngModel", item_r2.serialNumber);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "won_", i_r9, "");
    \u0275\u0275twoWayProperty("ngModel", item_r2.workOrderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "qty_", i_r9, "");
    \u0275\u0275twoWayProperty("ngModel", item_r2.qty);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "unit_", i_r9, "");
    \u0275\u0275twoWayProperty("ngModel", item_r2.unit);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r2.currency);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", item_r2.showCurrencyMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.showCurrencyMenu);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("name", "vc_", i_r9, "");
    \u0275\u0275twoWayProperty("ngModel", item_r2.valueCustom);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.items.length > 1);
  }
}
function GoodIssueFormComponent_tr_111_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function GoodIssueFormComponent_tr_111_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const i_r13 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeContainerRow(i_r13));
    });
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementEnd();
  }
}
function GoodIssueFormComponent_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_111_Template_input_ngModelChange_4_listener($event) {
      const box_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(box_r11.containerType, $event) || (box_r11.containerType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_111_Template_input_ngModelChange_6_listener($event) {
      const box_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(box_r11.length, $event) || (box_r11.length = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_111_Template_input_ngModelChange_8_listener($event) {
      const box_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(box_r11.width, $event) || (box_r11.width = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_111_Template_input_ngModelChange_10_listener($event) {
      const box_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(box_r11.height, $event) || (box_r11.height = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_111_Template_input_ngModelChange_12_listener($event) {
      const box_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(box_r11.grossWeight, $event) || (box_r11.grossWeight = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_tr_111_Template_input_ngModelChange_14_listener($event) {
      const box_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(box_r11.markings, $event) || (box_r11.markings = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 44);
    \u0275\u0275template(16, GoodIssueFormComponent_tr_111_button_16_Template, 2, 0, "button", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const box_r11 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(box_r11.no);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "ctype_", i_r13, "");
    \u0275\u0275twoWayProperty("ngModel", box_r11.containerType);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "length_", i_r13, "");
    \u0275\u0275twoWayProperty("ngModel", box_r11.length);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "width_", i_r13, "");
    \u0275\u0275twoWayProperty("ngModel", box_r11.width);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "height_", i_r13, "");
    \u0275\u0275twoWayProperty("ngModel", box_r11.height);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "gw_", i_r13, "");
    \u0275\u0275twoWayProperty("ngModel", box_r11.grossWeight);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "mark_", i_r13, "");
    \u0275\u0275twoWayProperty("ngModel", box_r11.markings);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.containers.length > 1);
  }
}
var GoodIssueFormComponent = class _GoodIssueFormComponent {
  constructor(router) {
    this.router = router;
    this.shipTo = {
      name: "",
      address: ""
    };
    this.picName = "";
    this.docInfo = {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      no: `0001/GMF/${(/* @__PURE__ */ new Date()).toISOString().split("T")[0].replace(/-/g, "")}`,
      shippedBy: "",
      awbNo: "",
      flightNo: "",
      registrationNumber: "",
      registrationDate: ""
    };
    this.items = [
      { no: 1, batchNumber: "", partNumber: "", description: "", serialNumber: "", workOrderNumber: "", qty: 1, unit: "", currency: "USD", valueCustom: "", showBatchMenu: false, showCurrencyMenu: false }
    ];
    this.containers = [
      { no: 1, containerType: "", length: 0, width: 0, height: 0, grossWeight: 0, markings: "" }
    ];
    this.batchesDb = [
      { batchNo: "000001", pn: "PN-1001A", desc: "310 LITRE OXYGEN BOTTLE", sn: "SN-998", unit: "SET" },
      { batchNo: "000002", pn: "PN-2022B", desc: "TURBO OIL 2380", sn: "SN-441", unit: "LTR" },
      { batchNo: "000003", pn: "PN-9988X", desc: "HYDRAULIC FLUID 41", sn: "SN-112", unit: "LTR" }
    ];
    this.currencies = ["USD", "EUR", "IDR", "SGD", "JPY"];
  }
  addItemRow() {
    this.items.push({
      no: this.items.length + 1,
      batchNumber: "",
      partNumber: "",
      description: "",
      serialNumber: "",
      workOrderNumber: "",
      qty: 1,
      unit: "",
      currency: "USD",
      valueCustom: "",
      showBatchMenu: false,
      showCurrencyMenu: false
    });
  }
  removeItemRow(index) {
    this.items.splice(index, 1);
    this.items.forEach((item, i) => item.no = i + 1);
  }
  addContainerRow() {
    this.containers.push({
      no: this.containers.length + 1,
      containerType: "",
      length: 0,
      width: 0,
      height: 0,
      grossWeight: 0,
      markings: ""
    });
  }
  removeContainerRow(index) {
    this.containers.splice(index, 1);
    this.containers.forEach((box, i) => box.no = i + 1);
  }
  toggleItemBatchMenu(item) {
    item.showBatchMenu = !item.showBatchMenu;
  }
  selectItemBatch(item, batch) {
    const found = this.batchesDb.find((b) => b.batchNo === batch);
    if (found) {
      item.batchNumber = found.batchNo;
      item.partNumber = found.pn;
      item.description = found.desc;
      item.serialNumber = found.sn;
      item.unit = found.unit;
    }
    item.showBatchMenu = false;
  }
  toggleItemCurrencyMenu(item) {
    item.showCurrencyMenu = !item.showCurrencyMenu;
  }
  selectItemCurrency(item, curr) {
    item.currency = curr;
    item.showCurrencyMenu = false;
  }
  onCancel() {
    this.router.navigate(["/gr-gi/gi"]);
  }
  onPrintSubmit() {
    alert("GI Data Saved! Proceeding to Print View...");
    let currentHistory = JSON.parse(localStorage.getItem("gi_history") || "[]");
    this.items.forEach((item, index) => {
      currentHistory.unshift({
        id: Date.now() + index,
        date: this.docInfo.date,
        docNo: this.docInfo.no,
        batchNumber: item.batchNumber || "N/A",
        partNumber: item.partNumber || "N/A",
        description: item.description,
        qty: item.qty,
        unit: item.unit,
        shippedTo: this.shipTo.name,
        currency: item.currency,
        valueCustom: item.valueCustom,
        registrationNumber: this.docInfo.registrationNumber,
        registrationDate: this.docInfo.registrationDate,
        picName: this.picName
      });
    });
    localStorage.setItem("gi_history", JSON.stringify(currentHistory));
    this.router.navigate(["/gr-gi/gi"]);
  }
  static {
    this.\u0275fac = function GoodIssueFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoodIssueFormComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoodIssueFormComponent, selectors: [["app-good-issue-form"]], decls: 118, vars: 10, consts: [[1, "form-card"], [1, "form-header"], [1, "gi-form", 3, "ngSubmit"], [1, "doc-details-section"], [1, "doc-grid"], [1, "form-group-col"], [1, "section-title"], [1, "form-group", "row-align"], ["type", "text", "name", "shipToName", "placeholder", "Nama Perusahaan...", 1, "bold-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "row-align", 2, "align-items", "flex-start"], [2, "margin-top", "5px"], ["name", "shipToAddr", "placeholder", "Alamat lengkap...", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "picName", "placeholder", "Nama PIC...", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "docDate", "readonly", "", 2, "background-color", "#f1f5f9", "cursor", "not-allowed", "color", "#64748b", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "docNo", "readonly", "", 2, "background-color", "#f1f5f9", "cursor", "not-allowed", "font-weight", "bold", "color", "#0f172a", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "shippedBy", "placeholder", "Transport...", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "awbNo", "placeholder", "Airway Bill...", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "flightNo", "placeholder", "Penerbangan...", 3, "ngModelChange", "ngModel"], [1, "table-section"], [1, "table-header-flex"], ["type", "button", 1, "btn-add", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "table-container", 2, "overflow", "visible"], ["width", "40"], ["width", "130"], ["width", "110"], [2, "min-width", "15rem"], ["width", "60"], ["width", "150"], [4, "ngFor", "ngForOf"], [1, "table-section", "mt-4"], [1, "table-container"], [1, "container-table"], ["rowspan", "2", "width", "60"], ["rowspan", "2"], ["colspan", "3", 1, "text-center"], ["rowspan", "2", "width", "100"], ["rowspan", "2", "width", "200"], ["rowspan", "2", "width", "50"], [1, "sub-th", "text-center"], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit"], [1, "fa-solid", "fa-print"], [1, "text-center"], [1, "dropdown-container"], [1, "custom-select-trigger", 3, "click"], [1, "fa-solid", "fa-angle-down"], ["class", "dropdown-menu", "style", "width: 100%; max-height: 180px; overflow-y: auto;", 4, "ngIf"], ["type", "text", "readonly", "", "placeholder", "Auto...", 1, "tbl-input", "part-input", 2, "background-color", "#f8fafc", "cursor", "not-allowed", 3, "ngModelChange", "ngModel", "name"], ["type", "text", "readonly", "", "placeholder", "Auto...", 1, "tbl-input", "desc-input", 2, "background-color", "#f8fafc", "cursor", "not-allowed", 3, "ngModelChange", "ngModel", "name"], ["type", "text", "readonly", "", "placeholder", "Auto...", 1, "tbl-input", "sn-input", 2, "background-color", "#f8fafc", "cursor", "not-allowed", 3, "ngModelChange", "ngModel", "name"], ["type", "text", "placeholder", "WON...", 1, "tbl-input", 3, "ngModelChange", "ngModel", "name"], ["type", "number", 1, "tbl-input", "text-center", 3, "ngModelChange", "ngModel", "name"], ["type", "text", "readonly", "", "placeholder", "Auto...", 1, "tbl-input", "text-center", "unit-input", 2, "background-color", "#f8fafc", "cursor", "not-allowed", 3, "ngModelChange", "ngModel", "name"], [2, "display", "flex", "gap", "6px"], [1, "dropdown-container", 2, "width", "55px", "flex-shrink", "0"], [1, "custom-select-trigger", 2, "padding", "6px 4px", 3, "click"], ["class", "dropdown-menu", 4, "ngIf"], ["type", "text", "placeholder", "0.00", 1, "tbl-input", 2, "flex", "1", 3, "ngModelChange", "ngModel", "name"], ["type", "button", "class", "btn-icon-delete", 3, "click", 4, "ngIf"], [1, "dropdown-menu", 2, "width", "100%", "max-height", "180px", "overflow-y", "auto"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "dropdown-menu"], ["type", "button", 1, "btn-icon-delete", 3, "click"], [1, "fa-solid", "fa-trash"], ["type", "text", 1, "tbl-input", 3, "ngModelChange", "ngModel", "name"]], template: function GoodIssueFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Form Good Issue (GI) / Shipping Manifest");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Document Pengeluaran Barang sesuai referensi manifest pengiriman");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 2);
        \u0275\u0275listener("ngSubmit", function GoodIssueFormComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onPrintSubmit();
        });
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6);
        \u0275\u0275text(11, "Shipped To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "label");
        \u0275\u0275text(14, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.shipTo.name, $event) || (ctx.shipTo.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "label", 10);
        \u0275\u0275text(18, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "textarea", 11);
        \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_Template_textarea_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.shipTo.address, $event) || (ctx.shipTo.address = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "label");
        \u0275\u0275text(22, "PIC Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.picName, $event) || (ctx.picName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 5)(25, "div", 6);
        \u0275\u0275text(26, "Document Info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7)(28, "label");
        \u0275\u0275text(29, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.docInfo.date, $event) || (ctx.docInfo.date = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 7)(32, "label");
        \u0275\u0275text(33, "Doc. No");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.docInfo.no, $event) || (ctx.docInfo.no = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 7)(36, "label");
        \u0275\u0275text(37, "Shipped By");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.docInfo.shippedBy, $event) || (ctx.docInfo.shippedBy = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 7)(40, "label");
        \u0275\u0275text(41, "A. W. B No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_Template_input_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.docInfo.awbNo, $event) || (ctx.docInfo.awbNo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 7)(44, "label");
        \u0275\u0275text(45, "Flight No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function GoodIssueFormComponent_Template_input_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.docInfo.flightNo, $event) || (ctx.docInfo.flightNo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "div", 18)(48, "div", 19)(49, "h3");
        \u0275\u0275text(50, "Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 20);
        \u0275\u0275listener("click", function GoodIssueFormComponent_Template_button_click_51_listener() {
          return ctx.addItemRow();
        });
        \u0275\u0275element(52, "i", 21);
        \u0275\u0275text(53, " Add Item");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 22)(55, "table")(56, "thead")(57, "tr")(58, "th", 23);
        \u0275\u0275text(59, "No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th", 24);
        \u0275\u0275text(61, "Batch Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th", 25);
        \u0275\u0275text(63, "Part Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th", 26);
        \u0275\u0275text(65, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th", 25);
        \u0275\u0275text(67, "Serial Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "th", 25);
        \u0275\u0275text(69, "Work Order No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "th", 27);
        \u0275\u0275text(71, "Qty.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "th", 27);
        \u0275\u0275text(73, "Unit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "th", 28);
        \u0275\u0275text(75, "Value For Custom Purpose");
        \u0275\u0275elementEnd();
        \u0275\u0275element(76, "th", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "tbody");
        \u0275\u0275template(78, GoodIssueFormComponent_tr_78_Template, 33, 31, "tr", 29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(79, "div", 30)(80, "div", 19)(81, "h3");
        \u0275\u0275text(82, "Containers / Dimension");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "button", 20);
        \u0275\u0275listener("click", function GoodIssueFormComponent_Template_button_click_83_listener() {
          return ctx.addContainerRow();
        });
        \u0275\u0275element(84, "i", 21);
        \u0275\u0275text(85, " Add Box");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 31)(87, "table", 32)(88, "thead")(89, "tr")(90, "th", 33);
        \u0275\u0275text(91, "BOX");
        \u0275\u0275element(92, "br");
        \u0275\u0275text(93, "No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "th", 34);
        \u0275\u0275text(95, "Container");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "th", 35);
        \u0275\u0275text(97, "Dimension in CM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "th", 36);
        \u0275\u0275text(99, "GROSS (KG)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "th", 37);
        \u0275\u0275text(101, "MARKINGS");
        \u0275\u0275elementEnd();
        \u0275\u0275element(102, "th", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "tr")(104, "th", 39);
        \u0275\u0275text(105, "Length");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "th", 39);
        \u0275\u0275text(107, "Width");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "th", 39);
        \u0275\u0275text(109, "Height");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(110, "tbody");
        \u0275\u0275template(111, GoodIssueFormComponent_tr_111_Template, 17, 20, "tr", 29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(112, "div", 40)(113, "button", 41);
        \u0275\u0275listener("click", function GoodIssueFormComponent_Template_button_click_113_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(114, "Batal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "button", 42);
        \u0275\u0275element(116, "i", 43);
        \u0275\u0275text(117, " Simpan & Print ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.shipTo.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.shipTo.address);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.picName);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.docInfo.date);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.docInfo.no);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.docInfo.shippedBy);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.docInfo.awbNo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.docInfo.flightNo);
        \u0275\u0275advance(32);
        \u0275\u0275property("ngForOf", ctx.items);
        \u0275\u0275advance(33);
        \u0275\u0275property("ngForOf", ctx.containers);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n  padding: 14px 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  max-width: 100%;\n  margin: 0;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 10px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.82rem;\n}\n.doc-details-section[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 14px;\n  margin-bottom: 12px;\n}\n.doc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.form-group-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n}\n.row-align[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 5px;\n}\n.row-align[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.row-align[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 90px;\n  font-weight: 600;\n  color: var(--text-main);\n  font-size: 0.85rem;\n}\n.row-align[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.row-align[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 10px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  background-color: white;\n  transition: all 0.2s;\n  font-size: 0.88rem;\n  font-family: inherit;\n}\n.row-align[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  min-height: 80px;\n  resize: vertical;\n}\n.row-align[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.row-align[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.bold-input[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem !important;\n  color: var(--text-main);\n}\n.table-section[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.table-header-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.table-header-flex[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--text-main);\n}\n.btn-add[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border-color);\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--primary-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: #f0f9ff;\n  border-color: #bae6fd;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n  background-color: white;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid #e2e8f0;\n  padding: 6px 8px;\n}\nth[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  color: #475569;\n  font-weight: 600;\n  text-transform: capitalize;\n  font-size: 0.75rem;\n  text-align: center;\n  vertical-align: middle;\n}\n.sub-th[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #f1f5f9;\n  font-size: 0.7rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.tbl-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  background-color: white;\n  transition: all 0.2s;\n  font-size: 0.8rem;\n  font-family: inherit;\n}\n.tbl-input[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.tbl-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  background-color: white;\n  box-shadow: 0 0 0 2px #f0f9ff;\n}\n.tbl-input[readonly][_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border-color: #e2e8f0;\n  color: #64748b;\n  cursor: not-allowed;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-family: inherit;\n  color: var(--text-main);\n  transition: all 0.2s;\n}\n.custom-select-trigger[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  border-color: #94a3b8;\n}\n.custom-select-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.8rem;\n  transition: transform 0.2s;\n}\n.custom-select-trigger[_ngcontent-%COMP%]   i.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 100%;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 50;\n  padding: 6px 4px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.85rem;\n  border-radius: 6px;\n  color: var(--text-main);\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f0f9ff;\n  color: var(--primary-color);\n}\n.btn-icon-delete[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.btn-icon-delete[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.85rem;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-size: 0.85rem;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n}\n@media (max-width: 1024px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .row-align[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .row-align[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .doc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .table-header-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n  }\n}\n/*# sourceMappingURL=good-issue-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoodIssueFormComponent, [{
    type: Component,
    args: [{ selector: "app-good-issue-form", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="form-card">
  <div class="form-header">
    <h2>Form Good Issue (GI) / Shipping Manifest</h2>
    <p>Document Pengeluaran Barang sesuai referensi manifest pengiriman</p>
  </div>

  <form class="gi-form" (ngSubmit)="onPrintSubmit()">
    <!-- Document Details Section -->
    <div class="doc-details-section">
      <div class="doc-grid">
        <div class="form-group-col">
          <div class="section-title">Shipped To</div>
          <div class="form-group row-align">
            <label>Name</label>
            <input type="text" [(ngModel)]="shipTo.name" name="shipToName" class="bold-input"
              placeholder="Nama Perusahaan...">
          </div>
          <div class="form-group row-align" style="align-items: flex-start;">
            <label style="margin-top: 5px;">Address</label>
            <textarea [(ngModel)]="shipTo.address" name="shipToAddr" placeholder="Alamat lengkap..."></textarea>
          </div>
          <div class="form-group row-align">
            <label>PIC Name</label>
            <input type="text" [(ngModel)]="picName" name="picName" placeholder="Nama PIC...">
          </div>
        </div>

        <div class="form-group-col">
          <div class="section-title">Document Info</div>
          <div class="form-group row-align">
            <label>Date</label>
            <input type="date" [(ngModel)]="docInfo.date" name="docDate" readonly
              style="background-color: #f1f5f9; cursor: not-allowed; color: #64748b;">
          </div>
          <div class="form-group row-align">
            <label>Doc. No</label>
            <input type="text" [(ngModel)]="docInfo.no" name="docNo" readonly
              style="background-color: #f1f5f9; cursor: not-allowed; font-weight: bold; color: #0f172a;">
          </div>
          <div class="form-group row-align">
            <label>Shipped By</label>
            <input type="text" [(ngModel)]="docInfo.shippedBy" name="shippedBy" placeholder="Transport...">
          </div>
          <div class="form-group row-align">
            <label>A. W. B No.</label>
            <input type="text" [(ngModel)]="docInfo.awbNo" name="awbNo" placeholder="Airway Bill...">
          </div>
          <div class="form-group row-align">
            <label>Flight No.</label>
            <input type="text" [(ngModel)]="docInfo.flightNo" name="flightNo" placeholder="Penerbangan...">
          </div>
        </div>
      </div>
    </div>

    <!-- Items Table Section -->
    <div class="table-section">
      <div class="table-header-flex">
        <h3>Items</h3>
        <button type="button" class="btn-add" (click)="addItemRow()"><i class="fa-solid fa-plus"></i> Add Item</button>
      </div>

      <div class="table-container" style="overflow: visible;">
        <table>
          <thead>
            <tr>
              <th width="40">No.</th>
              <th width="130">Batch Number</th>
              <th width="110">Part Number</th>
              <th style="min-width: 15rem;">Description</th>
              <th width="110">Serial Number</th>
              <th width="110">Work Order No.</th>
              <th width="60">Qty.</th>
              <th width="60">Unit</th>
              <th width="150">Value For Custom Purpose</th>
              <th width="40"></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of items; let i = index">
              <td class="text-center">{{item.no}}</td>
              <td>
                <div class="dropdown-container">
                  <div class="custom-select-trigger" (click)="toggleItemBatchMenu(item)">
                    <span>{{item.batchNumber || '-- Select --'}}</span>
                    <i class="fa-solid fa-angle-down" [class.rotated]="item.showBatchMenu"></i>
                  </div>
                  <div class="dropdown-menu" *ngIf="item.showBatchMenu" style="width: 100%; max-height: 180px; overflow-y: auto;">
                    <ul>
                      <li *ngFor="let b of batchesDb" (click)="selectItemBatch(item, b.batchNo)">{{b.batchNo}}</li>
                    </ul>
                  </div>
                </div>
              </td>
              <td><input type="text" [(ngModel)]="item.partNumber" name="pn_{{i}}" class="tbl-input part-input" readonly
                  placeholder="Auto..." style="background-color: #f8fafc; cursor: not-allowed;"></td>
              <td><input type="text" [(ngModel)]="item.description" name="desc_{{i}}" class="tbl-input desc-input"
                  readonly placeholder="Auto..." style="background-color: #f8fafc; cursor: not-allowed;"></td>
              <td><input type="text" [(ngModel)]="item.serialNumber" name="sn_{{i}}" class="tbl-input sn-input" readonly
                  placeholder="Auto..." style="background-color: #f8fafc; cursor: not-allowed;"></td>
              <td><input type="text" [(ngModel)]="item.workOrderNumber" name="won_{{i}}" class="tbl-input"
                  placeholder="WON..."></td>
              <td><input type="number" [(ngModel)]="item.qty" name="qty_{{i}}" class="tbl-input text-center"></td>
              <td><input type="text" [(ngModel)]="item.unit" name="unit_{{i}}" class="tbl-input text-center unit-input"
                  readonly placeholder="Auto..." style="background-color: #f8fafc; cursor: not-allowed;"></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <div class="dropdown-container" style="width: 55px; flex-shrink: 0;">
                    <div class="custom-select-trigger" (click)="toggleItemCurrencyMenu(item)" style="padding: 6px 4px;">
                      <span>{{item.currency}}</span>
                      <i class="fa-solid fa-angle-down" [class.rotated]="item.showCurrencyMenu"></i>
                    </div>
                    <div class="dropdown-menu" *ngIf="item.showCurrencyMenu">
                      <ul>
                        <li *ngFor="let curr of currencies" (click)="selectItemCurrency(item, curr)">{{curr}}</li>
                      </ul>
                    </div>
                  </div>
                  <input type="text" [(ngModel)]="item.valueCustom" name="vc_{{i}}" class="tbl-input" style="flex: 1;"
                    placeholder="0.00">
                </div>
              </td>
              <td class="text-center">
                <button type="button" class="btn-icon-delete" (click)="removeItemRow(i)" *ngIf="items.length > 1">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Container Table Section -->
    <div class="table-section mt-4">
      <div class="table-header-flex">
        <h3>Containers / Dimension</h3>
        <button type="button" class="btn-add" (click)="addContainerRow()"><i class="fa-solid fa-plus"></i> Add
          Box</button>
      </div>

      <div class="table-container">
        <table class="container-table">
          <thead>
            <tr>
              <th rowspan="2" width="60">BOX<br>No.</th>
              <th rowspan="2">Container</th>
              <th colspan="3" class="text-center">Dimension in CM</th>
              <th rowspan="2" width="100">GROSS (KG)</th>
              <th rowspan="2" width="200">MARKINGS</th>
              <th rowspan="2" width="50"></th>
            </tr>
            <tr>
              <th class="sub-th text-center">Length</th>
              <th class="sub-th text-center">Width</th>
              <th class="sub-th text-center">Height</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let box of containers; let i = index">
              <td class="text-center">{{box.no}}</td>
              <td><input type="text" [(ngModel)]="box.containerType" name="ctype_{{i}}" class="tbl-input"></td>
              <td><input type="number" [(ngModel)]="box.length" name="length_{{i}}" class="tbl-input text-center"></td>
              <td><input type="number" [(ngModel)]="box.width" name="width_{{i}}" class="tbl-input text-center"></td>
              <td><input type="number" [(ngModel)]="box.height" name="height_{{i}}" class="tbl-input text-center"></td>
              <td><input type="number" [(ngModel)]="box.grossWeight" name="gw_{{i}}" class="tbl-input text-center"></td>
              <td><input type="text" [(ngModel)]="box.markings" name="mark_{{i}}" class="tbl-input"></td>
              <td class="text-center">
                <button type="button" class="btn-icon-delete" (click)="removeContainerRow(i)"
                  *ngIf="containers.length > 1">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="form-actions">
      <button type="button" class="btn-cancel" (click)="onCancel()">Batal</button>
      <button type="submit" class="btn-submit">
        <i class="fa-solid fa-print"></i>
        Simpan & Print
      </button>
    </div>
  </form>
</div>`, styles: ["/* src/app-frontend/pages/good-issue/good-issue-form/good-issue-form.component.css */\n.form-card {\n  background: #fff;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n  padding: 14px 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  max-width: 100%;\n  margin: 0;\n}\n.form-header {\n  margin-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 10px;\n}\n.form-header h2 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-main);\n  margin-bottom: 4px;\n}\n.form-header p {\n  color: var(--text-muted);\n  font-size: 0.82rem;\n}\n.doc-details-section {\n  background-color: #f8fafc;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 14px;\n  margin-bottom: 12px;\n}\n.doc-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.form-group-col {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.section-title {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n}\n.row-align {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 5px;\n}\n.row-align:last-child {\n  margin-bottom: 0;\n}\n.row-align label {\n  width: 90px;\n  font-weight: 600;\n  color: var(--text-main);\n  font-size: 0.85rem;\n}\n.row-align input,\n.row-align textarea {\n  flex: 1;\n  padding: 6px 10px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  background-color: white;\n  transition: all 0.2s;\n  font-size: 0.88rem;\n  font-family: inherit;\n}\n.row-align textarea {\n  padding: 8px 10px;\n  min-height: 80px;\n  resize: vertical;\n}\n.row-align input:focus,\n.row-align textarea:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px #f0f9ff;\n}\n.bold-input {\n  font-weight: 700;\n  font-size: 1rem !important;\n  color: var(--text-main);\n}\n.table-section {\n  margin-bottom: 10px;\n}\n.mt-4 {\n  margin-top: 12px;\n}\n.table-header-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.table-header-flex h3 {\n  font-size: 1.05rem;\n  color: var(--text-main);\n}\n.btn-add {\n  background: white;\n  border: 1px solid var(--border-color);\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--primary-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.btn-add:hover {\n  background: #f0f9ff;\n  border-color: #bae6fd;\n}\n.table-container {\n  overflow-x: auto;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n  background-color: white;\n}\nth,\ntd {\n  text-align: center;\n  border: 1px solid #e2e8f0;\n  padding: 6px 8px;\n}\nth {\n  background-color: #f8fafc;\n  color: #475569;\n  font-weight: 600;\n  text-transform: capitalize;\n  font-size: 0.75rem;\n  text-align: center;\n  vertical-align: middle;\n}\n.sub-th {\n  text-align: center;\n  background-color: #f1f5f9;\n  font-size: 0.7rem;\n}\n.text-center {\n  text-align: center;\n}\n.tbl-input {\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  background-color: white;\n  transition: all 0.2s;\n  font-size: 0.8rem;\n  font-family: inherit;\n}\n.tbl-input:hover {\n  border-color: #94a3b8;\n}\n.tbl-input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  background-color: white;\n  box-shadow: 0 0 0 2px #f0f9ff;\n}\n.tbl-input[readonly] {\n  background-color: #f8fafc;\n  border-color: #e2e8f0;\n  color: #64748b;\n  cursor: not-allowed;\n}\n.dropdown-container {\n  position: relative;\n  width: 100%;\n}\n.custom-select-trigger {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-family: inherit;\n  color: var(--text-main);\n  transition: all 0.2s;\n}\n.custom-select-trigger:hover {\n  background-color: #f8fafc;\n  border-color: #94a3b8;\n}\n.custom-select-trigger i {\n  color: #64748b;\n  font-size: 0.8rem;\n  transition: transform 0.2s;\n}\n.custom-select-trigger i.rotated {\n  transform: rotate(180deg);\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 100%;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);\n  margin-top: 4px;\n  z-index: 50;\n  padding: 6px 4px;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dropdown-menu li {\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: 0.2s;\n  font-size: 0.85rem;\n  border-radius: 6px;\n  color: var(--text-main);\n}\n.dropdown-menu li:hover {\n  background-color: #f0f9ff;\n  color: var(--primary-color);\n}\n.btn-icon-delete {\n  background: none;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.btn-icon-delete:hover {\n  background-color: #fee2e2;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-color);\n}\n.btn-cancel {\n  padding: 8px 18px;\n  background: white;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.85rem;\n}\n.btn-cancel:hover {\n  background: #f8fafc;\n}\n.btn-submit {\n  padding: 8px 18px;\n  background: var(--primary-color);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n  font-size: 0.85rem;\n}\n.btn-submit:hover {\n  background: #0284c7;\n  transform: translateY(-1px);\n}\n@media (max-width: 1024px) {\n  .form-card {\n    padding: 24px 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n  .row-align {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .row-align label {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .doc-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .table-header-flex {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .form-card {\n    padding: 14px 12px;\n  }\n}\n/*# sourceMappingURL=good-issue-form.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoodIssueFormComponent, { className: "GoodIssueFormComponent", filePath: "src/app-frontend/pages/good-issue/good-issue-form/good-issue-form.component.ts", lineNumber: 13 });
})();
export {
  GoodIssueFormComponent
};
//# sourceMappingURL=chunk-YUOHFR4Y.js.map
