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
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-BXD7PU4O.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/login/login.component.ts
var LoginComponent = class _LoginComponent {
  constructor(router) {
    this.router = router;
    this.username = "";
    this.password = "";
    this.showPassword = false;
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onLogin() {
    if (this.username && this.password) {
      this.router.navigate(["/dashboard"]);
    } else {
      alert("Silakan masukkan ID Pengguna dan Kata Sandi");
    }
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 23, vars: 7, consts: [[1, "login-container-wrapper"], ["src", "assets/images/gmfLogo.png", "alt", "GMF AeroAsia Logo", 1, "gmf-logo"], [1, "login-container"], [1, "logo-container"], ["src", "assets/images/logo2.png", "alt", "GBDPS Logo", 2, "height", "52px", "margin-bottom", "12px", "filter", "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))"], [3, "ngSubmit"], [1, "input-group"], [1, "input-wrapper"], ["type", "text", "placeholder", "Masukkan ID Pengguna", "name", "username", "autocomplete", "off", "required", "", 3, "ngModelChange", "ngModel"], [1, "fa-solid", "fa-user", "icon-left"], [1, "input-group", 2, "margin-bottom", "28px"], ["placeholder", "Masukkan Kata Sandi", "name", "password", "required", "", 3, "ngModelChange", "type", "ngModel"], [1, "fa-solid", "fa-lock", "icon-left"], [1, "fa-solid", "icon-right", 3, "click"], ["type", "submit", 1, "btn-login"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "GBDPS Logistics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
          return ctx.onLogin();
        });
        \u0275\u0275elementStart(8, "div", 6)(9, "label");
        \u0275\u0275text(10, "ID Pengguna / NIP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "label");
        \u0275\u0275text(16, "Kata Sandi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "i", 12);
        \u0275\u0275elementStart(20, "i", 13);
        \u0275\u0275listener("click", function LoginComponent_Template_i_click_20_listener() {
          return ctx.togglePassword();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275text(22, "Masuk");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.username);
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("fa-eye", !ctx.showPassword)("fa-eye-slash", ctx.showPassword);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.gmf-logo[_ngcontent-%COMP%] {\n  display: block;\n  height: 110px;\n  width: auto;\n  margin-bottom: 28px;\n  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.5)) brightness(0) invert(1);\n  position: relative;\n  z-index: 10;\n}\n.login-container-wrapper[_ngcontent-%COMP%] {\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    sans-serif;\n  color: #0f172a;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: url(/assets/images/gudang.png) no-repeat center center fixed;\n  background-size: cover;\n  overflow: hidden;\n}\n.login-container-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.6);\n  z-index: 1;\n}\n.login-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  width: 100%;\n  max-width: 460px;\n  background: rgba(248, 250, 252, 0.6);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-radius: 20px;\n  padding: 44px 48px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  margin: 0 16px;\n}\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.logo-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #0284c7);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 12px;\n  filter: drop-shadow(0 4px 6px rgba(14, 165, 233, 0.2));\n}\n.logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.input-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 8px;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrapper[_ngcontent-%COMP%]   i.icon-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  transition: color 0.3s ease;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px 12px 40px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  color: #0f172a;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  background: #f8fafc;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #ffffff;\n  border-color: #0ea5e9;\n  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + i.icon-left[_ngcontent-%COMP%], \n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ i.icon-left[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.input-wrapper[_ngcontent-%COMP%]   i.icon-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  color: #94a3b8;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.input-wrapper[_ngcontent-%COMP%]   i.icon-right[_ngcontent-%COMP%]:hover {\n  color: #475569;\n}\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #0284c7);\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 10px;\n  font-family: inherit;\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n.btn-login[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(14, 165, 233, 0.4);\n}\n.btn-login[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .gmf-logo[_ngcontent-%COMP%] {\n    height: 80px;\n    margin-bottom: 20px;\n  }\n  .login-container[_ngcontent-%COMP%] {\n    max-width: 400px;\n    padding: 32px 28px;\n    margin: 0 16px;\n    border-radius: 16px;\n  }\n  .logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 44px !important;\n  }\n}\n@media (max-width: 480px) {\n  .gmf-logo[_ngcontent-%COMP%] {\n    height: 64px;\n    margin-bottom: 16px;\n  }\n  .login-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 28px 20px;\n    margin: 0 12px;\n    border-radius: 14px;\n  }\n  .logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .logo-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 10px 14px 10px 36px;\n    font-size: 0.9rem;\n  }\n  .btn-login[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="login-container-wrapper">
  <img src="assets/images/gmfLogo.png" alt="GMF AeroAsia Logo" class="gmf-logo">
  <div class="login-container">
    <div class="logo-container">
      <img src="assets/images/logo2.png" alt="GBDPS Logo" style="height: 52px; margin-bottom: 12px; filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05));">
      <h1>GBDPS Logistics</h1>
    </div>

    <form (ngSubmit)="onLogin()">
      <div class="input-group">
        <label>ID Pengguna / NIP</label>
        <div class="input-wrapper">
          <input type="text" placeholder="Masukkan ID Pengguna" [(ngModel)]="username" name="username" autocomplete="off" required>
          <i class="fa-solid fa-user icon-left"></i>
        </div>
      </div>

      <div class="input-group" style="margin-bottom: 28px;">
        <label>Kata Sandi</label>
        <div class="input-wrapper">
          <input [type]="showPassword ? 'text' : 'password'" placeholder="Masukkan Kata Sandi" [(ngModel)]="password" name="password" required>
          <i class="fa-solid fa-lock icon-left"></i>
          <i class="fa-solid icon-right" [class.fa-eye]="!showPassword" [class.fa-eye-slash]="showPassword" (click)="togglePassword()"></i>
        </div>
      </div>

      <button type="submit" class="btn-login">Masuk</button>
    </form>
  </div>
</div>
`, styles: ['/* src/app-frontend/pages/login/login.component.css */\n.gmf-logo {\n  display: block;\n  height: 110px;\n  width: auto;\n  margin-bottom: 28px;\n  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.5)) brightness(0) invert(1);\n  position: relative;\n  z-index: 10;\n}\n.login-container-wrapper {\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    sans-serif;\n  color: #0f172a;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: url(/assets/images/gudang.png) no-repeat center center fixed;\n  background-size: cover;\n  overflow: hidden;\n}\n.login-container-wrapper::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.6);\n  z-index: 1;\n}\n.login-container {\n  position: relative;\n  z-index: 10;\n  width: 100%;\n  max-width: 460px;\n  background: rgba(248, 250, 252, 0.6);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-radius: 20px;\n  padding: 44px 48px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  margin: 0 16px;\n}\n.logo-container {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.logo-container i {\n  font-size: 2.8rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #0284c7);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 12px;\n  filter: drop-shadow(0 4px 6px rgba(14, 165, 233, 0.2));\n}\n.logo-container h1 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.input-group {\n  margin-bottom: 18px;\n}\n.input-group label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 8px;\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrapper i.icon-left {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  transition: color 0.3s ease;\n}\n.input-wrapper input {\n  width: 100%;\n  padding: 12px 14px 12px 40px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  color: #0f172a;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  background: #f8fafc;\n}\n.input-wrapper input:focus {\n  outline: none;\n  background: #ffffff;\n  border-color: #0ea5e9;\n  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);\n}\n.input-wrapper input:focus + i.icon-left,\n.input-wrapper input:focus ~ i.icon-left {\n  color: #0ea5e9;\n}\n.input-wrapper input::placeholder {\n  color: #94a3b8;\n}\n.input-wrapper i.icon-right {\n  position: absolute;\n  right: 14px;\n  color: #94a3b8;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.input-wrapper i.icon-right:hover {\n  color: #475569;\n}\n.btn-login {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #0284c7);\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 10px;\n  font-family: inherit;\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n.btn-login:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(14, 165, 233, 0.4);\n}\n.btn-login:active {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .gmf-logo {\n    height: 80px;\n    margin-bottom: 20px;\n  }\n  .login-container {\n    max-width: 400px;\n    padding: 32px 28px;\n    margin: 0 16px;\n    border-radius: 16px;\n  }\n  .logo-container h1 {\n    font-size: 1.2rem;\n  }\n  .logo-container img {\n    height: 44px !important;\n  }\n}\n@media (max-width: 480px) {\n  .gmf-logo {\n    height: 64px;\n    margin-bottom: 16px;\n  }\n  .login-container {\n    max-width: 100%;\n    padding: 28px 20px;\n    margin: 0 12px;\n    border-radius: 14px;\n  }\n  .logo-container h1 {\n    font-size: 1.1rem;\n  }\n  .logo-container i {\n    font-size: 2.2rem;\n  }\n  .input-group label {\n    font-size: 0.75rem;\n  }\n  .input-wrapper input {\n    padding: 10px 14px 10px 36px;\n    font-size: 0.9rem;\n  }\n  .btn-login {\n    padding: 12px;\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app-frontend/pages/login/login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-3FLPVNIW.js.map
