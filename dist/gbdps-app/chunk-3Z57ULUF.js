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

// src/app-frontend/pages/feedback/feedback.component.ts
function FeedbackComponent_div_17_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275listener("click", function FeedbackComponent_div_17_li_2_Template_li_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectCategory(cat_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active-opt", cat_r2 === ctx_r2.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2, " ");
  }
}
function FeedbackComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "ul");
    \u0275\u0275template(2, FeedbackComponent_div_17_li_2_Template, 2, 3, "li", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
var FeedbackComponent = class _FeedbackComponent {
  constructor() {
    this.categories = ["Saran Fitur", "Laporan Bug", "Pertanyaan Umum", "Lainnya"];
    this.selectedCategory = "Saran Fitur";
    this.isDropdownOpen = false;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectCategory(cat) {
    this.selectedCategory = cat;
    this.isDropdownOpen = false;
  }
  static {
    this.\u0275fac = function FeedbackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackComponent, selectors: [["app-feedback"]], decls: 27, vars: 4, consts: [[1, "feedback-container"], [1, "fa-regular", "fa-comment-dots", 2, "color", "var(--primary-color)"], [2, "color", "var(--text-muted)", "margin-bottom", "20px"], [2, "display", "flex", "flex-direction", "column", "gap", "16px", "max-width", "600px"], [2, "display", "block", "font-weight", "600", "font-size", "0.9rem", "margin-bottom", "8px"], [2, "color", "#ef4444"], [2, "position", "relative"], [1, "custom-select-trigger", 3, "click"], [1, "fa-solid", "fa-angle-down", 2, "color", "var(--text-muted)"], ["class", "dropdown-menu", 4, "ngIf"], ["rows", "5", "placeholder", "Tuliskan feedback Anda di sini...", 2, "width", "100%", "padding", "10px 14px", "border", "1px solid var(--border-color)", "border-radius", "8px", "font-family", "inherit", "resize", "vertical", "font-size", "0.9rem", "color", "var(--text-main)"], [2, "align-self", "flex-start", "background", "var(--primary-color)", "color", "#fff", "border", "none", "padding", "10px 24px", "border-radius", "8px", "font-weight", "600", "cursor", "pointer"], [1, "fa-solid", "fa-paper-plane"], [1, "dropdown-menu"], [3, "active-opt", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function FeedbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275element(2, "i", 1);
        \u0275\u0275text(3, " Kirim Feedback");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Beritahu kami apa yang bisa ditingkatkan atau laporkan masalah yang Anda alami.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3)(7, "div")(8, "label", 4);
        \u0275\u0275text(9, "Kategori ");
        \u0275\u0275elementStart(10, "span", 5);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7);
        \u0275\u0275listener("click", function FeedbackComponent_Template_div_click_13_listener() {
          return ctx.toggleDropdown();
        });
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, FeedbackComponent_div_17_Template, 3, 1, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div")(19, "label", 4);
        \u0275\u0275text(20, "Pesan ");
        \u0275\u0275elementStart(21, "span", 5);
        \u0275\u0275text(22, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "textarea", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 11);
        \u0275\u0275element(25, "i", 12);
        \u0275\u0275text(26, " Kirim Feedback");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("open", ctx.isDropdownOpen);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.selectedCategory);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isDropdownOpen);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.feedback-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.custom-select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fff;\n  font-size: 0.9rem;\n  font-family: inherit;\n  color: var(--text-main);\n}\n.custom-select-trigger[_ngcontent-%COMP%]:hover, \n.custom-select-trigger.open[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  width: 100%;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n  z-index: 300;\n  padding: 4px 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  border-bottom: 1px solid var(--border-color);\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f9ff;\n  color: var(--primary-color);\n}\n.dropdown-menu[_ngcontent-%COMP%]   li.active-opt[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: var(--primary-color);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .feedback-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .custom-select-trigger[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    padding: 8px 12px;\n  }\n}\n@media (max-width: 480px) {\n  .feedback-container[_ngcontent-%COMP%] {\n    padding: 12px;\n    border-radius: 8px;\n  }\n  .custom-select-trigger[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=feedback.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackComponent, [{
    type: Component,
    args: [{ selector: "app-feedback", standalone: true, imports: [CommonModule], template: '<div class="feedback-container">\n  <h2><i class="fa-regular fa-comment-dots" style="color:var(--primary-color);"></i> Kirim Feedback</h2>\n  <p style="color:var(--text-muted); margin-bottom: 20px;">Beritahu kami apa yang bisa ditingkatkan atau laporkan masalah yang Anda alami.</p>\n  \n  <div style="display:flex; flex-direction:column; gap:16px; max-width: 600px;">\n    <div>\n      <label style="display:block; font-weight:600; font-size:0.9rem; margin-bottom:8px;">Kategori <span style="color:#ef4444">*</span></label>\n      \n      <!-- Custom Dropdown container -->\n      <div style="position: relative;">\n        <div class="custom-select-trigger" [class.open]="isDropdownOpen" (click)="toggleDropdown()">\n          <span>{{ selectedCategory }}</span>\n          <i class="fa-solid fa-angle-down" style="color:var(--text-muted);"></i>\n        </div>\n        \n        <div class="dropdown-menu" *ngIf="isDropdownOpen">\n          <ul>\n            <li *ngFor="let cat of categories" (click)="selectCategory(cat)" [class.active-opt]="cat === selectedCategory">\n              {{ cat }}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    \n    <div>\n      <label style="display:block; font-weight:600; font-size:0.9rem; margin-bottom:8px;">Pesan <span style="color:#ef4444">*</span></label>\n      <textarea rows="5" placeholder="Tuliskan feedback Anda di sini..." style="width:100%; padding:10px 14px; border:1px solid var(--border-color); border-radius:8px; font-family:inherit; resize:vertical; font-size:0.9rem; color:var(--text-main);"></textarea>\n    </div>\n    \n    <button style="align-self:flex-start; background:var(--primary-color); color:#fff; border:none; padding:10px 24px; border-radius:8px; font-weight:600; cursor:pointer;"><i class="fa-solid fa-paper-plane"></i> Kirim Feedback</button>\n  </div>\n</div>\n', styles: ["/* src/app-frontend/pages/feedback/feedback.component.css */\n.feedback-container {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.custom-select-trigger {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  background: #fff;\n  font-size: 0.9rem;\n  font-family: inherit;\n  color: var(--text-main);\n}\n.custom-select-trigger:hover,\n.custom-select-trigger.open {\n  border-color: var(--primary-color);\n}\n.dropdown-menu {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  width: 100%;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n  z-index: 300;\n  padding: 4px 0;\n}\n.dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu li {\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  border-bottom: 1px solid var(--border-color);\n}\n.dropdown-menu li:last-child {\n  border-bottom: none;\n}\n.dropdown-menu li:hover {\n  background: #f0f9ff;\n  color: var(--primary-color);\n}\n.dropdown-menu li.active-opt {\n  background: #e0f2fe;\n  color: var(--primary-color);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .feedback-container {\n    padding: 16px;\n  }\n  .custom-select-trigger {\n    font-size: 0.85rem;\n    padding: 8px 12px;\n  }\n}\n@media (max-width: 480px) {\n  .feedback-container {\n    padding: 12px;\n    border-radius: 8px;\n  }\n  .custom-select-trigger {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=feedback.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackComponent, { className: "FeedbackComponent", filePath: "src/app-frontend/pages/feedback/feedback.component.ts", lineNumber: 11 });
})();
export {
  FeedbackComponent
};
//# sourceMappingURL=chunk-3Z57ULUF.js.map
