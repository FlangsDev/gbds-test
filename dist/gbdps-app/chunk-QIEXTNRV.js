import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 64, vars: 0, consts: [[1, "dashboard-container"], [1, "welcome-banner"], [1, "banner-content"], [1, "banner-icon"], [1, "fa-solid", "fa-boxes-packing"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon-wrap", "green"], [1, "fa-solid", "fa-arrow-right-to-bracket"], [1, "stat-label"], [1, "stat-value", "text-success"], [1, "stat-icon-wrap", "red"], [1, "fa-solid", "fa-arrow-up-right-from-square"], [1, "stat-value", "text-danger"], [1, "stat-icon-wrap", "purple"], [1, "fa-solid", "fa-warehouse"], [1, "stat-value", "text-purple"], [1, "charts-container"], [1, "chart-card"], [1, "chart-title"], [1, "chart-content"], [1, "donut-chart", "composition-chart"], [1, "donut-center"], [1, "donut-label"], [1, "donut-value"], [1, "chart-legend"], [1, "legend-item"], [1, "legend-info"], [1, "legend-dot", 2, "background", "#0ea5e9"], [1, "legend-pct"], [1, "legend-dot", 2, "background", "#16a34a"], [1, "legend-dot", 2, "background", "#f59e0b"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Selamat Datang di GBDPS-APP!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Kelola inventaris, pantau laporan keluar-masuk barang, dan akses data Gudang Berikat Anda dengan mudah dan cepat.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275element(8, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8);
        \u0275\u0275element(13, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15, "Pemasukan (Tahun ini)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17, "12");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "div", 7)(20, "div", 12);
        \u0275\u0275element(21, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 10);
        \u0275\u0275text(23, "Pengeluaran (Tahun ini)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "span", 14);
        \u0275\u0275text(25, "5");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 6)(27, "div", 7)(28, "div", 15);
        \u0275\u0275element(29, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 10);
        \u0275\u0275text(31, "Stock Saat Ini");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "span", 17);
        \u0275\u0275text(33, "876");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 18)(35, "div", 19)(36, "h3", 20);
        \u0275\u0275text(37, "Proporsi Dokumen Pabean (BC)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 21)(39, "div", 22)(40, "div", 23)(41, "span", 24);
        \u0275\u0275text(42, "Total Dok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 25);
        \u0275\u0275text(44, "48");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 26)(46, "div", 27)(47, "div", 28);
        \u0275\u0275element(48, "span", 29);
        \u0275\u0275text(49, "BC 2.3 (Pemasukan)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span", 30);
        \u0275\u0275text(51, "19 Dokumen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 27)(53, "div", 28);
        \u0275\u0275element(54, "span", 31);
        \u0275\u0275text(55, "BC 2.7 (Pemasukan)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 30);
        \u0275\u0275text(57, "17 Dokumen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 27)(59, "div", 28);
        \u0275\u0275element(60, "span", 32);
        \u0275\u0275text(61, "BC 3.0 (Pengeluaran)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 30);
        \u0275\u0275text(63, "12 Dokumen");
        \u0275\u0275elementEnd()()()()()()();
      }
    }, dependencies: [CommonModule], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.welcome-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9 0%,\n      #0284c7 100%);\n  border-radius: 16px;\n  padding: 20px 30px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.welcome-banner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.15) 0%,\n      transparent 60%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.banner-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 600px;\n}\n.banner-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #e0f2fe;\n  line-height: 1.4;\n}\n.banner-icon[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  color: rgba(255, 255, 255, 0.15);\n  position: relative;\n  z-index: 2;\n  transform: rotate(-10deg);\n  margin-right: 20px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 16px 14px;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.stat-icon-wrap.blue[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.stat-icon-wrap.green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.stat-icon-wrap.red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.stat-icon-wrap.orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #ea580c;\n}\n.stat-icon-wrap.purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  line-height: 1.3;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.text-orange[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.text-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.charts-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  width: 100%;\n  margin: 0 auto;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 16px;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n  width: 100%;\n  max-width: 550px;\n  margin: 0 auto;\n}\n.chart-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.1);\n}\n.chart-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin-bottom: 12px;\n}\n.chart-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.donut-chart[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  position: relative;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.composition-chart[_ngcontent-%COMP%] {\n  background:\n    conic-gradient(\n      #0ea5e9 0% 40%,\n      #16a34a 40% 75%,\n      #f59e0b 75% 100%);\n}\n.grgi-chart[_ngcontent-%COMP%] {\n  background: conic-gradient(#10b981 0% 55%, #ef4444 55% 100%);\n}\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 84px;\n  height: 84px;\n  background: #fff;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.06);\n  text-align: center;\n}\n.donut-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: var(--text-muted);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  line-height: 1.1;\n  margin-bottom: 4px;\n  padding: 0 5px;\n}\n.donut-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-main);\n  line-height: 1;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.legend-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #475569;\n  font-weight: 500;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.legend-pct[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n@media (max-width: 1024px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 18px 24px;\n  }\n  .banner-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .banner-icon[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n    margin-right: 10px;\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .welcome-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n    padding: 16px 20px;\n  }\n  .banner-content[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .banner-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  .banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .banner-icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    margin-right: 0;\n    display: none;\n  }\n  .chart-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .charts-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .chart-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 12px 10px;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .stat-label[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    border-radius: 12px;\n  }\n  .banner-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .donut-chart[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .donut-center[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n  .donut-value[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .legend-info[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .legend-pct[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule], template: `
    <div class="dashboard-container">
      <div class="welcome-banner">
        <div class="banner-content">
          <h2>Selamat Datang di GBDPS-APP!</h2>
          <p>Kelola inventaris, pantau laporan keluar-masuk barang, dan akses data Gudang Berikat Anda dengan mudah dan cepat.</p>
        </div>
        <div class="banner-icon">
          <i class="fa-solid fa-boxes-packing"></i>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-wrap green">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </div>
            <span class="stat-label">Pemasukan (Tahun ini)</span>
          </div>
          <span class="stat-value text-success">12</span>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-wrap red">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <span class="stat-label">Pengeluaran (Tahun ini)</span>
          </div>
          <span class="stat-value text-danger">5</span>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-wrap purple">
              <i class="fa-solid fa-warehouse"></i>
            </div>
            <span class="stat-label">Stock Saat Ini</span>
          </div>
          <span class="stat-value text-purple">876</span>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="charts-container">
        <!-- Chart 1 -->
        <div class="chart-card">
          <h3 class="chart-title">Proporsi Dokumen Pabean (BC)</h3>
          <div class="chart-content">
            <div class="donut-chart composition-chart">
              <div class="donut-center">
                <span class="donut-label">Total Dok</span>
                <span class="donut-value">48</span>
              </div>
            </div>
            <div class="chart-legend">
              <div class="legend-item">
                <div class="legend-info"><span class="legend-dot" style="background: #0ea5e9;"></span>BC 2.3 (Pemasukan)</div>
                <span class="legend-pct">19 Dokumen</span>
              </div>
              <div class="legend-item">
                <div class="legend-info"><span class="legend-dot" style="background: #16a34a;"></span>BC 2.7 (Pemasukan)</div>
                <span class="legend-pct">17 Dokumen</span>
              </div>
              <div class="legend-item">
                <div class="legend-info"><span class="legend-dot" style="background: #f59e0b;"></span>BC 3.0 (Pengeluaran)</div>
                <span class="legend-pct">12 Dokumen</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;ab68b5a51d7a13a1ceab3a12620f4e9b3b0012f2b464bd0c13dd48a9ba1fefc2;C:/Users/yoichi_isagi/Documents/mockupgb/gbdps-app/src/app-frontend/pages/dashboard/dashboard.component.ts */\n.dashboard-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.welcome-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9 0%,\n      #0284c7 100%);\n  border-radius: 16px;\n  padding: 20px 30px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.welcome-banner::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.15) 0%,\n      transparent 60%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.banner-content {\n  position: relative;\n  z-index: 2;\n  max-width: 600px;\n}\n.banner-content h2 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.banner-content p {\n  font-size: 0.85rem;\n  color: #e0f2fe;\n  line-height: 1.4;\n}\n.banner-icon {\n  font-size: 4.5rem;\n  color: rgba(255, 255, 255, 0.15);\n  position: relative;\n  z-index: 2;\n  transform: rotate(-10deg);\n  margin-right: 20px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.stat-card {\n  background: #fff;\n  padding: 16px 14px;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.stat-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.stat-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.stat-icon-wrap.blue {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.stat-icon-wrap.green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.stat-icon-wrap.red {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.stat-icon-wrap.orange {\n  background: #ffedd5;\n  color: #ea580c;\n}\n.stat-icon-wrap.purple {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.stat-label {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  line-height: 1.3;\n}\n.stat-value {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.text-success {\n  color: #16a34a;\n}\n.text-danger {\n  color: #dc2626;\n}\n.text-orange {\n  color: #ea580c;\n}\n.text-purple {\n  color: #7c3aed;\n}\n.charts-container {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  width: 100%;\n  margin: 0 auto;\n}\n.chart-card {\n  background: #fff;\n  padding: 16px;\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n  width: 100%;\n  max-width: 550px;\n  margin: 0 auto;\n}\n.chart-card:hover {\n  box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.1);\n}\n.chart-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-main);\n  margin-bottom: 12px;\n}\n.chart-content {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.donut-chart {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  position: relative;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.composition-chart {\n  background:\n    conic-gradient(\n      #0ea5e9 0% 40%,\n      #16a34a 40% 75%,\n      #f59e0b 75% 100%);\n}\n.grgi-chart {\n  background: conic-gradient(#10b981 0% 55%, #ef4444 55% 100%);\n}\n.donut-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 84px;\n  height: 84px;\n  background: #fff;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.06);\n  text-align: center;\n}\n.donut-label {\n  font-size: 0.62rem;\n  color: var(--text-muted);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  line-height: 1.1;\n  margin-bottom: 4px;\n  padding: 0 5px;\n}\n.donut-value {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-main);\n  line-height: 1;\n}\n.chart-legend {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.legend-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.legend-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #475569;\n  font-weight: 500;\n}\n.legend-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.legend-pct {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n@media (max-width: 1024px) {\n  .welcome-banner {\n    padding: 18px 24px;\n  }\n  .banner-content h2 {\n    font-size: 1.2rem;\n  }\n  .banner-icon {\n    font-size: 3.5rem;\n    margin-right: 10px;\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .welcome-banner {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n    padding: 16px 20px;\n  }\n  .banner-content {\n    max-width: 100%;\n  }\n  .banner-content h2 {\n    font-size: 1.15rem;\n  }\n  .banner-content p {\n    font-size: 0.8rem;\n  }\n  .banner-icon {\n    font-size: 2.5rem;\n    margin-right: 0;\n    display: none;\n  }\n  .chart-content {\n    flex-direction: column;\n    align-items: center;\n  }\n  .charts-container {\n    flex-direction: column;\n  }\n  .chart-card {\n    max-width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-container {\n    gap: 12px;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .stat-card {\n    padding: 12px 10px;\n  }\n  .stat-value {\n    font-size: 1.3rem;\n  }\n  .stat-label {\n    font-size: 0.78rem;\n  }\n  .welcome-banner {\n    padding: 14px 16px;\n    border-radius: 12px;\n  }\n  .banner-content h2 {\n    font-size: 1rem;\n  }\n  .donut-chart {\n    width: 100px;\n    height: 100px;\n  }\n  .donut-center {\n    width: 64px;\n    height: 64px;\n  }\n  .donut-value {\n    font-size: 1rem;\n  }\n  .legend-info {\n    font-size: 0.78rem;\n  }\n  .legend-pct {\n    font-size: 0.78rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app-frontend/pages/dashboard/dashboard.component.ts", lineNumber: 410 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-QIEXTNRV.js.map
