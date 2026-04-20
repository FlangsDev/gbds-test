import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-H43VSBM5.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/shared/layouts/main-layout/main-layout.component.ts
function MainLayoutComponent_li_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function MainLayoutComponent_li_14_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeMenu = item_r2.label);
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function MainLayoutComponent_li_14_div_2_li_7_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 48);
  }
  if (rf & 2) {
    const child_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(child_r6.icon);
  }
}
function MainLayoutComponent_li_14_div_2_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 46);
    \u0275\u0275listener("click", function MainLayoutComponent_li_14_div_2_li_7_Template_a_click_1_listener() {
      const child_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.activeMenu = child_r6.label);
    });
    \u0275\u0275template(2, MainLayoutComponent_li_14_div_2_li_7_i_2_Template, 1, 2, "i", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", child_r6.route);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r6.label, " ");
  }
}
function MainLayoutComponent_li_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function MainLayoutComponent_li_14_div_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSubMenu(item_r2));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 44);
    \u0275\u0275template(7, MainLayoutComponent_li_14_div_2_li_7_Template, 4, 3, "li", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", item_r2.isExpanded);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", item_r2.isExpanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r2.children);
  }
}
function MainLayoutComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 37);
    \u0275\u0275template(1, MainLayoutComponent_li_14_div_1_Template, 4, 4, "div", 38)(2, MainLayoutComponent_li_14_div_2_Template, 8, 8, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.children);
  }
}
function MainLayoutComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275text(3, " Guidance ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 51)(5, "li");
    \u0275\u0275text(6, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li");
    \u0275\u0275text(8, "Flow Procces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275text(10, "Tutorial");
    \u0275\u0275elementEnd()()();
  }
}
function MainLayoutComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "span", 55);
    \u0275\u0275text(4, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 56);
    \u0275\u0275text(6, "Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54)(8, "span", 55);
    \u0275\u0275text(9, "Role Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11, "Administrator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 54)(13, "span", 55);
    \u0275\u0275text(14, "Unit kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 56);
    \u0275\u0275text(16, "Gudang Berikat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "ul")(18, "li", 57);
    \u0275\u0275element(19, "i", 13);
    \u0275\u0275text(20, " Logout");
    \u0275\u0275elementEnd()()();
  }
}
var MainLayoutComponent = class _MainLayoutComponent {
  constructor() {
    this.title = "gbdps-app";
    this.isSidebarCollapsed = false;
    this.activeMenu = "Beranda";
    this.currentTime = "";
    this.currentDate = "";
    this.isProfileOpen = false;
    this.isGuidanceOpen = false;
    this.menuItems = [
      { label: "Beranda", icon: "fa-solid fa-house", route: "/dashboard" },
      { label: "Master Data Barang", icon: "fa-solid fa-database", route: "/master-barang" },
      {
        label: "Pencatatan Barang",
        icon: "fa-solid fa-cube",
        children: [
          { label: "Laporan Pemasukan Barang", route: "/recording/inward", icon: "fa-solid fa-arrow-right-to-bracket" },
          { label: "Laporan Pengeluaran Barang", route: "/recording/outward", icon: "fa-solid fa-arrow-up-right-from-square" }
        ]
      },
      {
        label: "Laporan",
        icon: "fa-solid fa-chart-column",
        children: [
          { label: "Laporan Mutasi", route: "/reports/mutation", icon: "fa-solid fa-file-contract" },
          { label: "Adjustment", route: "/recording/adjustment-v2", icon: "fa-solid fa-code-compare" },
          { label: "Stock Opname", route: "/recording/stock-opname", icon: "fa-solid fa-bullseye" },
          { label: "Saldo Awal", route: "/recording/saldo-awal", icon: "fa-solid fa-file-invoice-dollar" }
        ]
      },
      {
        label: "GR & GI",
        icon: "fa-solid fa-right-left",
        children: [
          { label: "Good Receipt (GR)", route: "/gr-gi/gr", icon: "fa-solid fa-file-import" },
          { label: "Good Issue (GI)", route: "/gr-gi/gi", icon: "fa-solid fa-file-export" }
        ]
      },
      { label: "Upload Scan Dokumen", icon: "fa-solid fa-file-arrow-up", route: "/upload/scan" },
      { label: "Upload Data BC", icon: "fa-solid fa-file-excel", route: "/upload/bc" },
      { label: "Histori", icon: "fa-solid fa-clock-rotate-left", route: "/history" },
      { label: "Feedback", icon: "fa-regular fa-comment-dots", route: "/feedback" },
      { label: "Guidance", icon: "fa-solid fa-circle-question", route: "/guidance" }
    ];
  }
  ngOnInit() {
    this.updateTime();
    this.timerInterval = setInterval(() => {
      this.updateTime();
    }, 1e3);
  }
  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  updateTime() {
    const now = /* @__PURE__ */ new Date();
    this.currentTime = now.toLocaleTimeString("id-ID", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }).replace(/\./g, ":");
    this.currentDate = now.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }).toUpperCase();
  }
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  toggleSubMenu(item) {
    if (this.isSidebarCollapsed) {
      this.isSidebarCollapsed = false;
    }
    const wasExpanded = item.isExpanded;
    this.menuItems.forEach((i) => i.isExpanded = false);
    item.isExpanded = !wasExpanded;
  }
  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
    this.isGuidanceOpen = false;
  }
  toggleGuidance() {
    this.isGuidanceOpen = !this.isGuidanceOpen;
    this.isProfileOpen = false;
  }
  static {
    this.\u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MainLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 49, vars: 10, consts: [[1, "layout-wrapper"], [1, "sidebar-overlay", 3, "click"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo", 3, "click"], ["src", "assets/images/logo2.png", "alt", "GBDPS Logo"], [1, "toggle-btn", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "sidebar-nav"], [1, "nav-label"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "logout-btn"], [1, "fa-solid", "fa-arrow-right-from-bracket"], [1, "main-container"], [1, "top-header"], [1, "header-left-group"], [1, "mobile-toggle-btn", 3, "click"], [1, "page-title"], [1, "header-right"], [1, "timer"], [1, "fa-regular", "fa-clock"], [1, "time-box"], [1, "time"], [1, "date"], [1, "guidance-wrapper"], [1, "info-btn", 3, "click"], [1, "fa-solid", "fa-info-circle"], ["class", "guidance-dropdown", 4, "ngIf"], [1, "user-profile-wrapper", 3, "click"], [1, "user-profile"], [1, "avatar"], [1, "fa-solid", "fa-user"], [1, "user-name"], [1, "fa-solid", "fa-angle-down", 2, "transition", "transform 0.2s"], ["class", "profile-dropdown", 4, "ngIf"], [1, "content-area"], [1, "nav-item"], ["class", "menu-link", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["class", "menu-group", 4, "ngIf"], ["routerLinkActive", "active", 1, "menu-link", 3, "click", "routerLink"], [1, "menu-group"], [1, "menu-link", "group-header", 3, "click"], [1, "fa-solid", "fa-angle-down", "arrow"], [1, "submenu"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "click", "routerLink"], ["class", "submenu-icon", 3, "class", 4, "ngIf"], [1, "submenu-icon"], [1, "guidance-dropdown"], [1, "guidance-header"], [1, "guidance-list"], [1, "profile-dropdown"], [1, "profile-info-grid"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "logout-text"]], template: function MainLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_1_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_4_listener() {
          return ctx.isSidebarCollapsed = false;
        });
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "GBDPS-APP");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_8_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "nav", 8)(11, "p", 9);
        \u0275\u0275text(12, "NAVIGATION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "ul");
        \u0275\u0275template(14, MainLayoutComponent_li_14_Template, 3, 2, "li", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
        \u0275\u0275element(17, "i", 13);
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19, "Logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "main", 14)(21, "header", 15)(22, "div", 16)(23, "button", 17);
        \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_23_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275element(24, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h1", 18);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 19)(28, "div", 20);
        \u0275\u0275element(29, "i", 21);
        \u0275\u0275elementStart(30, "div", 22)(31, "span", 23);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 24);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 25)(36, "button", 26);
        \u0275\u0275listener("click", function MainLayoutComponent_Template_button_click_36_listener() {
          return ctx.toggleGuidance();
        });
        \u0275\u0275element(37, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, MainLayoutComponent_div_38_Template, 11, 0, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 29);
        \u0275\u0275listener("click", function MainLayoutComponent_Template_div_click_39_listener() {
          return ctx.toggleProfile();
        });
        \u0275\u0275elementStart(40, "div", 30)(41, "div", 31);
        \u0275\u0275element(42, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 33);
        \u0275\u0275text(44, "Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "i", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, MainLayoutComponent_div_46_Template, 21, 0, "div", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "section", 36);
        \u0275\u0275element(48, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("collapsed", ctx.isSidebarCollapsed);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.menuItems);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.activeMenu);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.currentTime);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.currentDate);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isGuidanceOpen);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("rotated", ctx.isProfileOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isProfileOpen);
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NgForOf, NgIf], styles: ['\n\n.layout-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background-color: #f0f9ff;\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s ease, transform 0.3s ease;\n  z-index: 100;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.02);\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  border-bottom: 1px solid var(--border-color);\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: var(--primary-color);\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  justify-content: center;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 0;\n  justify-content: center;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 1.1rem;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 0;\n}\n.nav-label[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  letter-spacing: 1px;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-link[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  color: var(--text-main);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.9rem;\n  position: relative;\n}\n.menu-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  width: 20px;\n  color: var(--text-muted);\n}\n.menu-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(14, 165, 233, 0.06);\n}\n.menu-link.active[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  background-color: rgba(14, 165, 233, 0.12);\n}\n.menu-link.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background-color: var(--primary-color);\n}\n.menu-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  color: var(--primary-color);\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  justify-content: center;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n  text-align: center;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n.arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.8rem;\n  transition: transform 0.3s;\n}\n.arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.submenu[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n  background-color: transparent;\n}\n.submenu.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 24px 10px 52px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.submenu-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  width: 16px;\n  text-align: center;\n}\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid var(--border-color);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #fee2e2;\n  background-color: #fff1f2;\n  color: #ef4444;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.layout-wrapper.collapsed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  justify-content: center;\n}\n.main-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.top-header[_ngcontent-%COMP%] {\n  height: 64px;\n  background-color: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  gap: 12px;\n}\n.header-left-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  flex: 1;\n}\n.mobile-toggle-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 8px 10px;\n  border-radius: 8px;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.mobile-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f9ff;\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  flex-shrink: 0;\n}\n.timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background-color: #f0f9ff;\n  padding: 6px 16px;\n  border-radius: 20px;\n  color: var(--primary-color);\n}\n.timer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.time-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.time[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-muted);\n}\n.info-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.info-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.guidance-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.guidance-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: -50px;\n  margin-top: 10px;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  width: 180px;\n  border: 1px solid var(--border-color);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n  overflow: hidden;\n}\n.guidance-header[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  color: #4b5563;\n  border-bottom: 1px solid #e2e8f0;\n  background-color: #f8fafc;\n  font-size: 0.85rem;\n}\n.guidance-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.9rem;\n}\n.guidance-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background-color: #ffffff;\n}\n.guidance-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 0.85rem;\n  color: #0284c7;\n  border-bottom: 1px solid #f1f5f9;\n  font-weight: 500;\n  cursor: pointer;\n}\n.guidance-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.guidance-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  color: var(--primary-color);\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.user-profile-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.profile-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 10px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  padding: 8px 0;\n  width: 220px;\n  border: 1px solid var(--border-color);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n.profile-info-grid[_ngcontent-%COMP%] {\n  padding: 8px 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border-bottom: 1px solid var(--border-color);\n  margin-bottom: 4px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-main);\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.85rem;\n  color: var(--text-main);\n  transition: background-color 0.2s;\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f1f5f9;\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout-text[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-top: 4px;\n}\n.profile-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  text-align: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background-color: var(--primary-color);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 32px;\n  overflow-y: auto;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 1440px) {\n  .content-area[_ngcontent-%COMP%] {\n    padding: 32px 48px;\n  }\n}\n@media (max-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n  .content-area[_ngcontent-%COMP%] {\n    padding: 20px 24px;\n  }\n  .top-header[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .timer[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    gap: 8px;\n  }\n  .time[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n  .date[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 280px;\n    transform: translateX(-100%);\n    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);\n    z-index: 1000;\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    width: 280px;\n    transform: translateX(0);\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .layout-wrapper.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n   .layout-wrapper.collapsed[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .layout-wrapper.collapsed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%] {\n    padding: 12px 24px;\n    justify-content: flex-start;\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n    padding: 10px;\n    justify-content: center;\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    justify-content: space-between;\n  }\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n    z-index: 999;\n    backdrop-filter: blur(2px);\n    -webkit-backdrop-filter: blur(2px);\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .sidebar-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .mobile-toggle-btn[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .top-header[_ngcontent-%COMP%] {\n    padding: 0 16px;\n    height: 56px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .timer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content-area[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .guidance-dropdown[_ngcontent-%COMP%] {\n    right: -16px;\n    width: 160px;\n  }\n  .profile-dropdown[_ngcontent-%COMP%] {\n    width: 200px;\n    right: -8px;\n  }\n}\n@media (max-width: 480px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .layout-wrapper.collapsed[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .top-header[_ngcontent-%COMP%] {\n    padding: 0 12px;\n    height: 52px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .content-area[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .avatar[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 0.8rem;\n  }\n  .info-btn[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .guidance-dropdown[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 52px;\n    left: 12px;\n    right: 12px;\n    width: auto;\n  }\n  .profile-dropdown[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 52px;\n    left: 12px;\n    right: 12px;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule], template: '<div class="layout-wrapper" [class.collapsed]="isSidebarCollapsed">\n  <!-- Mobile Overlay Backdrop -->\n  <div class="sidebar-overlay" (click)="toggleSidebar()"></div>\n\n  <!-- Sidebar -->\n  <aside class="sidebar">\n    <div class="sidebar-header">\n      <div class="logo" (click)="isSidebarCollapsed = false">\n        <img src="assets/images/logo2.png" alt="GBDPS Logo">\n        <span>GBDPS-APP</span>\n      </div>\n      <button class="toggle-btn" (click)="toggleSidebar()">\n        <i class="fa-solid fa-bars"></i>\n      </button>\n    </div>\n\n    <nav class="sidebar-nav">\n      <p class="nav-label">NAVIGATION</p>\n      <ul>\n        <li *ngFor="let item of menuItems" class="nav-item">\n          <div class="menu-link" [routerLink]="item.route" routerLinkActive="active" *ngIf="!item.children" (click)="activeMenu = item.label">\n            <i [class]="item.icon"></i>\n            <span>{{item.label}}</span>\n          </div>\n\n          <div class="menu-group" *ngIf="item.children">\n            <div class="menu-link group-header" (click)="toggleSubMenu(item)">\n              <i [class]="item.icon"></i>\n              <span>{{item.label}}</span>\n              <i class="fa-solid fa-angle-down arrow" [class.rotated]="item.isExpanded"></i>\n            </div>\n            <ul class="submenu" [class.expanded]="item.isExpanded">\n              <li *ngFor="let child of item.children">\n                <a [routerLink]="child.route" routerLinkActive="active" (click)="activeMenu = child.label">\n                  <i class="submenu-icon" [class]="child.icon" *ngIf="child.icon"></i>\n                  {{child.label}}\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </nav>\n\n    <div class="sidebar-footer">\n      <button class="logout-btn">\n        <i class="fa-solid fa-arrow-right-from-bracket"></i>\n        <span>Logout</span>\n      </button>\n    </div>\n  </aside>\n\n  <!-- Main Content -->\n  <main class="main-container">\n    <header class="top-header">\n      <div class="header-left-group">\n        <button class="mobile-toggle-btn" (click)="toggleSidebar()">\n          <i class="fa-solid fa-bars"></i>\n        </button>\n        <h1 class="page-title">{{activeMenu}}</h1>\n      </div>\n      <div class="header-right">\n        <div class="timer">\n          <i class="fa-regular fa-clock"></i>\n          <div class="time-box">\n            <span class="time">{{currentTime}}</span>\n            <span class="date">{{currentDate}}</span>\n          </div>\n        </div>\n        <div class="guidance-wrapper">\n          <button class="info-btn" (click)="toggleGuidance()"><i class="fa-solid fa-info-circle"></i></button>\n          \n          <div class="guidance-dropdown" *ngIf="isGuidanceOpen">\n            <div class="guidance-header">\n              <i class="fa-solid fa-info-circle"></i> Guidance\n            </div>\n            <ul class="guidance-list">\n              <li>Overview</li>\n              <li>Flow Procces</li>\n              <li>Tutorial</li>\n            </ul>\n          </div>\n        </div>\n        <div class="user-profile-wrapper" (click)="toggleProfile()">\n          <div class="user-profile">\n            <div class="avatar">\n              <i class="fa-solid fa-user"></i>\n            </div>\n            <span class="user-name">Admin</span>\n            <i class="fa-solid fa-angle-down" [class.rotated]="isProfileOpen" style="transition: transform 0.2s"></i>\n          </div>\n          \n          <div class="profile-dropdown" *ngIf="isProfileOpen">\n            <div class="profile-info-grid">\n              <div class="info-row">\n                <span class="info-label">Nama</span>\n                <span class="info-value">Admin</span>\n              </div>\n              <div class="info-row">\n                <span class="info-label">Role Access</span>\n                <span class="info-value">Administrator</span>\n              </div>\n              <div class="info-row">\n                <span class="info-label">Unit kerja</span>\n                <span class="info-value">Gudang Berikat</span>\n              </div>\n            </div>\n            <ul>\n              <li class="logout-text"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <section class="content-area">\n      <router-outlet></router-outlet>\n    </section>\n  </main>\n</div>\n', styles: ['/* src/app-frontend/shared/layouts/main-layout/main-layout.component.css */\n.layout-wrapper {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n}\n.sidebar {\n  width: 260px;\n  background-color: #f0f9ff;\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s ease, transform 0.3s ease;\n  z-index: 100;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.02);\n}\n.layout-wrapper.collapsed .sidebar {\n  width: 80px;\n}\n.sidebar-header {\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  border-bottom: 1px solid var(--border-color);\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: var(--primary-color);\n}\n.logo img {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n}\n.layout-wrapper.collapsed .logo span {\n  display: none;\n}\n.layout-wrapper.collapsed .logo {\n  cursor: pointer;\n  width: 100%;\n  justify-content: center;\n}\n.layout-wrapper.collapsed .sidebar-header {\n  padding: 0;\n  justify-content: center;\n}\n.toggle-btn {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 1.1rem;\n}\n.layout-wrapper.collapsed .toggle-btn {\n  display: none;\n}\n.sidebar-nav {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 0;\n}\n.nav-label {\n  padding: 0 24px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  letter-spacing: 1px;\n}\n.layout-wrapper.collapsed .nav-label {\n  display: none;\n}\n.menu-link {\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  color: var(--text-main);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.9rem;\n  position: relative;\n}\n.menu-link i:first-child {\n  width: 20px;\n  color: var(--text-muted);\n}\n.menu-link:hover {\n  background-color: rgba(14, 165, 233, 0.06);\n}\n.menu-link.active {\n  color: var(--primary-color);\n  background-color: rgba(14, 165, 233, 0.12);\n}\n.menu-link.active::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background-color: var(--primary-color);\n}\n.menu-link.active i:first-child {\n  color: var(--primary-color);\n}\n.layout-wrapper.collapsed .menu-link span {\n  display: none;\n}\n.layout-wrapper.collapsed .menu-link {\n  padding: 16px 0;\n  justify-content: center;\n}\n.layout-wrapper.collapsed .menu-link i:first-child {\n  margin: 0;\n  text-align: center;\n}\n.layout-wrapper.collapsed .arrow {\n  display: none;\n}\n.arrow {\n  margin-left: auto;\n  font-size: 0.8rem;\n  transition: transform 0.3s;\n}\n.arrow.rotated {\n  transform: rotate(180deg);\n}\n.submenu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n  background-color: transparent;\n}\n.submenu.expanded {\n  max-height: 500px;\n}\n.submenu li a {\n  padding: 10px 24px 10px 52px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.submenu-icon {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  width: 16px;\n  text-align: center;\n}\n.submenu li a:hover {\n  color: var(--primary-color);\n}\n.submenu li a.active {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.submenu li a.active .submenu-icon {\n  color: var(--primary-color);\n}\n.layout-wrapper.collapsed .submenu {\n  display: none !important;\n}\n.sidebar-footer {\n  padding: 20px;\n  border-top: 1px solid var(--border-color);\n}\n.logout-btn {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #fee2e2;\n  background-color: #fff1f2;\n  color: #ef4444;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.layout-wrapper.collapsed .logout-btn span {\n  display: none;\n}\n.layout-wrapper.collapsed .logout-btn {\n  padding: 12px 0;\n  justify-content: center;\n}\n.main-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.top-header {\n  height: 64px;\n  background-color: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  gap: 12px;\n}\n.header-left-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  flex: 1;\n}\n.mobile-toggle-btn {\n  display: none;\n  background: none;\n  border: 1px solid var(--border-color);\n  color: var(--text-main);\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 8px 10px;\n  border-radius: 8px;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.mobile-toggle-btn:hover {\n  background: #f0f9ff;\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n}\n.page-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  flex-shrink: 0;\n}\n.timer {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background-color: #f0f9ff;\n  padding: 6px 16px;\n  border-radius: 20px;\n  color: var(--primary-color);\n}\n.timer i {\n  font-size: 1.1rem;\n}\n.time-box {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.time {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n.date {\n  font-size: 0.65rem;\n  color: var(--text-muted);\n}\n.info-btn {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.info-btn:hover {\n  color: var(--primary-color);\n}\n.guidance-wrapper {\n  position: relative;\n}\n.guidance-dropdown {\n  position: absolute;\n  top: 100%;\n  right: -50px;\n  margin-top: 10px;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  width: 180px;\n  border: 1px solid var(--border-color);\n  z-index: 1000;\n  animation: slideDown 0.2s ease-out;\n  overflow: hidden;\n}\n.guidance-header {\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  color: #4b5563;\n  border-bottom: 1px solid #e2e8f0;\n  background-color: #f8fafc;\n  font-size: 0.85rem;\n}\n.guidance-header i {\n  color: #475569;\n  font-size: 0.9rem;\n}\n.guidance-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background-color: #ffffff;\n}\n.guidance-list li {\n  padding: 10px 14px;\n  font-size: 0.85rem;\n  color: #0284c7;\n  border-bottom: 1px solid #f1f5f9;\n  font-weight: 500;\n  cursor: pointer;\n}\n.guidance-list li:last-child {\n  border-bottom: none;\n}\n.guidance-list li:hover {\n  background-color: #f8fafc;\n  color: var(--primary-color);\n}\n.user-profile {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.user-profile-wrapper {\n  position: relative;\n  cursor: pointer;\n}\n.profile-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 10px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  padding: 8px 0;\n  width: 220px;\n  border: 1px solid var(--border-color);\n  z-index: 1000;\n  animation: slideDown 0.2s ease-out;\n}\n.profile-info-grid {\n  padding: 8px 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border-bottom: 1px solid var(--border-color);\n  margin-bottom: 4px;\n}\n.info-row {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.info-label {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.info-value {\n  font-size: 0.9rem;\n  color: var(--text-main);\n  font-weight: 500;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-dropdown ul li {\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.85rem;\n  color: var(--text-main);\n  transition: background-color 0.2s;\n}\n.profile-dropdown ul li:hover {\n  background-color: #f1f5f9;\n}\n.profile-dropdown ul li.logout-text {\n  color: #dc2626;\n  margin-top: 4px;\n}\n.profile-dropdown i {\n  width: 16px;\n  text-align: center;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  background-color: var(--primary-color);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-name {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.content-area {\n  flex: 1;\n  padding: 24px 32px;\n  overflow-y: auto;\n}\n.sidebar-overlay {\n  display: none;\n}\n@media (min-width: 1440px) {\n  .content-area {\n    padding: 32px 48px;\n  }\n}\n@media (max-width: 1024px) {\n  .sidebar {\n    width: 220px;\n  }\n  .content-area {\n    padding: 20px 24px;\n  }\n  .top-header {\n    padding: 0 20px;\n  }\n  .header-right {\n    gap: 16px;\n  }\n  .timer {\n    padding: 6px 12px;\n    gap: 8px;\n  }\n  .time {\n    font-size: 0.82rem;\n  }\n  .date {\n    font-size: 0.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 280px;\n    transform: translateX(-100%);\n    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);\n    z-index: 1000;\n  }\n  .layout-wrapper.collapsed .sidebar {\n    width: 280px;\n    transform: translateX(0);\n  }\n  .layout-wrapper.collapsed .logo span,\n  .layout-wrapper.collapsed .nav-label,\n  .layout-wrapper.collapsed .menu-link span,\n  .layout-wrapper.collapsed .logout-btn span {\n    display: block;\n  }\n  .layout-wrapper.collapsed .toggle-btn {\n    display: block;\n  }\n  .layout-wrapper.collapsed .menu-link {\n    padding: 12px 24px;\n    justify-content: flex-start;\n  }\n  .layout-wrapper.collapsed .arrow {\n    display: block;\n  }\n  .layout-wrapper.collapsed .submenu {\n    display: block !important;\n  }\n  .layout-wrapper.collapsed .logout-btn {\n    padding: 10px;\n    justify-content: center;\n  }\n  .layout-wrapper.collapsed .sidebar-header {\n    padding: 0 20px;\n    justify-content: space-between;\n  }\n  .sidebar-overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n    z-index: 999;\n    backdrop-filter: blur(2px);\n    -webkit-backdrop-filter: blur(2px);\n  }\n  .layout-wrapper.collapsed .sidebar-overlay {\n    display: block;\n  }\n  .mobile-toggle-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .top-header {\n    padding: 0 16px;\n    height: 56px;\n  }\n  .page-title {\n    font-size: 1rem;\n  }\n  .header-right {\n    gap: 12px;\n  }\n  .timer {\n    display: none;\n  }\n  .user-name {\n    display: none;\n  }\n  .content-area {\n    padding: 16px;\n  }\n  .guidance-dropdown {\n    right: -16px;\n    width: 160px;\n  }\n  .profile-dropdown {\n    width: 200px;\n    right: -8px;\n  }\n}\n@media (max-width: 480px) {\n  .sidebar {\n    width: 100%;\n  }\n  .layout-wrapper.collapsed .sidebar {\n    width: 100%;\n  }\n  .top-header {\n    padding: 0 12px;\n    height: 52px;\n  }\n  .page-title {\n    font-size: 0.9rem;\n  }\n  .header-right {\n    gap: 8px;\n  }\n  .content-area {\n    padding: 12px;\n  }\n  .avatar {\n    width: 28px;\n    height: 28px;\n    font-size: 0.8rem;\n  }\n  .info-btn {\n    font-size: 1rem;\n  }\n  .guidance-dropdown {\n    position: fixed;\n    top: 52px;\n    left: 12px;\n    right: 12px;\n    width: auto;\n  }\n  .profile-dropdown {\n    position: fixed;\n    top: 52px;\n    left: 12px;\n    right: 12px;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app-frontend/shared/layouts/main-layout/main-layout.component.ts", lineNumber: 12 });
})();
export {
  MainLayoutComponent
};
//# sourceMappingURL=chunk-VDNC67VT.js.map
