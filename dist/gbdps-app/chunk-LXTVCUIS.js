import {
  CommonModule,
  Component,
  NgClass,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-BHDYJQ6O.js";

// src/app-frontend/pages/guidance/guidance.component.ts
function GuidanceComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "h4");
    \u0275\u0275text(4, "SOLID Principle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul")(6, "li")(7, "strong");
    \u0275\u0275text(8, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \u2014 Single Responsibility: Class hanya memiliki satu tanggung jawab.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li")(11, "strong");
    \u0275\u0275text(12, "O");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " \u2014 Open/Closed: Terbuka untuk ekstensi, tertutup untuk modifikasi.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li")(15, "strong");
    \u0275\u0275text(16, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " \u2014 Liskov Substitution: Subtype harus bisa menggantikan base type.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li")(19, "strong");
    \u0275\u0275text(20, "I");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " \u2014 Interface Segregation: Interface kecil dan fokus.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li")(23, "strong");
    \u0275\u0275text(24, "D");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " \u2014 Dependency Inversion: Modul high-level tidak bergantung pada low-level.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 32)(27, "h4");
    \u0275\u0275text(28, "KISS Principle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p")(30, "em");
    \u0275\u0275text(31, '"Keep It Simple, Stupid"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " \u2014 Hindari kompleksitas yang tidak perlu. Rancang solusi yang sederhana, fungsional, dan mudah dipahami.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 32)(34, "h4");
    \u0275\u0275text(35, "DRY Principle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p")(37, "em");
    \u0275\u0275text(38, `"Don't Repeat Yourself"`);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " \u2014 Hindari duplikasi kode. Gunakan abstraksi dan reuse code untuk mengurangi redundansi.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 33)(41, "code");
    \u0275\u0275text(42, "export abstract class BaseComponent implements OnDestroy {");
    \u0275\u0275element(43, "br");
    \u0275\u0275text(44, "\xA0\xA0unsubscribe$: Subject<void> = new Subject<void>();");
    \u0275\u0275element(45, "br");
    \u0275\u0275text(46, "\xA0\xA0ngOnDestroy(): void { this.unsubscribe$.next(); }");
    \u0275\u0275element(47, "br");
    \u0275\u0275text(48, "}");
    \u0275\u0275elementEnd()()()()();
  }
}
function GuidanceComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 34)(2, "div", 35)(3, "div", 36);
    \u0275\u0275element(4, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Java Environment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "JDK 17.0.6 LTS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Spring Boot 2.x / 3.x");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Quarkus / Micronaut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 35)(15, "div", 36);
    \u0275\u0275element(16, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h4");
    \u0275\u0275text(18, "NodeJS Environment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul")(20, "li");
    \u0275\u0275text(21, "NodeJS 18.12.0 / 20.9.0 LTS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23, "Angular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "NestJS / RxJs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 35)(27, "div", 36);
    \u0275\u0275element(28, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h4");
    \u0275\u0275text(30, "Dart / Flutter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul")(32, "li");
    \u0275\u0275text(33, "Dart (latest version)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "li");
    \u0275\u0275text(35, "Flutter (latest version)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "GetX State Management");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 35)(39, "div", 36);
    \u0275\u0275element(40, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "h4");
    \u0275\u0275text(42, "Database & Tools");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ul")(44, "li");
    \u0275\u0275text(45, "PostgreSQL 13.5+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "Redis / MongoDB / Elastic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "Kafka / RabbitMQ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 41);
    \u0275\u0275element(51, "i", 42);
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Gunakan versi ");
    \u0275\u0275elementStart(54, "strong");
    \u0275\u0275text(55, "LTS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " untuk stabilitas, keamanan, dan kompatibilitas enterprise.");
    \u0275\u0275elementEnd()()();
  }
}
function GuidanceComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 43)(2, "div", 44)(3, "h4");
    \u0275\u0275element(4, "i", 45);
    \u0275\u0275text(5, " Backend (Module-based)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 46)(7, "pre");
    \u0275\u0275text(8, "app/\n\u2514\u2500\u2500 modules/\n    \u2514\u2500\u2500 user/\n        \u251C\u2500\u2500 UserController.java\n        \u251C\u2500\u2500 UserService.java\n        \u251C\u2500\u2500 UserRepository.java\n        \u2514\u2500\u2500 dtos/\n            \u251C\u2500\u2500 UserDto.java\n            \u2514\u2500\u2500 InsertUserDto.java");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 44)(10, "h4");
    \u0275\u0275element(11, "i", 47);
    \u0275\u0275text(12, " Frontend (Angular)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 46)(14, "pre");
    \u0275\u0275text(15, "app-frontend/\n\u251C\u2500\u2500 core/\n\u2502   \u251C\u2500\u2500 base-service.ts\n\u2502   \u2514\u2500\u2500 guards/\n\u251C\u2500\u2500 pages/\n\u2502   \u2514\u2500\u2500 users/\n\u2502       \u251C\u2500\u2500 sub-pages/\n\u2502       \u2514\u2500\u2500 components/\n\u2514\u2500\u2500 shared/\n    \u251C\u2500\u2500 layouts/\n    \u251C\u2500\u2500 reusable-components/\n    \u251C\u2500\u2500 utils/\n    \u2514\u2500\u2500 dtos/");
    \u0275\u0275elementEnd()()()()();
  }
}
function GuidanceComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 48)(2, "table")(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Kategori");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Contoh");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody")(12, "tr")(13, "td");
    \u0275\u0275text(14, "File (TypeScript)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 49);
    \u0275\u0275text(17, "kebab-case");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "code");
    \u0275\u0275text(20, "man-power.service.ts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tr")(22, "td");
    \u0275\u0275text(23, "File (Java)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 50);
    \u0275\u0275text(26, "PascalCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "code");
    \u0275\u0275text(29, "ManPowerService.java");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tr")(31, "td");
    \u0275\u0275text(32, "File (Dart)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td")(34, "span", 51);
    \u0275\u0275text(35, "snake_case");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "td")(37, "code");
    \u0275\u0275text(38, "man_power.service.dart");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tr")(40, "td");
    \u0275\u0275text(41, "Class / Interface");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td")(43, "span", 50);
    \u0275\u0275text(44, "PascalCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "td")(46, "code");
    \u0275\u0275text(47, "UserServiceImpl");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "tr")(49, "td");
    \u0275\u0275text(50, "Method / Function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td")(52, "span", 52);
    \u0275\u0275text(53, "camelCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "td")(55, "code");
    \u0275\u0275text(56, "getUserById()");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "tr")(58, "td");
    \u0275\u0275text(59, "Variable / Const");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td")(61, "span", 52);
    \u0275\u0275text(62, "camelCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "td")(64, "code");
    \u0275\u0275text(65, "personalNumber");
    \u0275\u0275elementEnd()()()()()()();
  }
}
function GuidanceComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 53)(2, "div", 54)(3, "h4");
    \u0275\u0275element(4, "i", 55);
    \u0275\u0275text(5, " Commit Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul")(7, "li");
    \u0275\u0275text(8, "Gunakan bracket: ");
    \u0275\u0275elementStart(9, "code");
    \u0275\u0275text(10, "[add]");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ", ");
    \u0275\u0275elementStart(12, "code");
    \u0275\u0275text(13, "[update]");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, ", ");
    \u0275\u0275elementStart(15, "code");
    \u0275\u0275text(16, "[remove]");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Gunakan present tense & imperative mood");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Subject line max 50 karakter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "Capitalize huruf pertama");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 56)(24, "code");
    \u0275\u0275text(25, "[add] color change logic on button");
    \u0275\u0275element(26, "br");
    \u0275\u0275text(27, "[update] layout design");
    \u0275\u0275element(28, "br");
    \u0275\u0275text(29, "[remove] deprecated function");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 54)(31, "h4");
    \u0275\u0275element(32, "i", 57);
    \u0275\u0275text(33, " Git-flow Branches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ul")(35, "li")(36, "span", 58);
    \u0275\u0275text(37, "master");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " \u2014 Production-ready code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li")(40, "span", 59);
    \u0275\u0275text(41, "staging");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " \u2014 Staging changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li")(44, "span", 60);
    \u0275\u0275text(45, "development");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " \u2014 Main development");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "li")(48, "span", 61);
    \u0275\u0275text(49, "feature/*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " \u2014 New features");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 54)(52, "h4");
    \u0275\u0275element(53, "i", 62);
    \u0275\u0275text(54, " Pull Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ul")(56, "li");
    \u0275\u0275text(57, "Buka PR setelah push ke branch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li");
    \u0275\u0275text(59, "Diskusi dan review dengan collaborator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "li");
    \u0275\u0275text(61, "Tambahkan follow-up commits jika perlu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "li");
    \u0275\u0275text(63, "Merge ke base branch setelah approval");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 54)(65, "h4");
    \u0275\u0275element(66, "i", 63);
    \u0275\u0275text(67, " Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "ul")(69, "li");
    \u0275\u0275text(70, "Gunakan single repository");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "li");
    \u0275\u0275text(72, "Gunakan tags untuk releases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "li");
    \u0275\u0275text(74, "Hindari binary files di repo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "li");
    \u0275\u0275text(76, "Jangan simpan password di repository");
    \u0275\u0275elementEnd()()()()();
  }
}
function GuidanceComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 64)(2, "div", 65)(3, "div", 66);
    \u0275\u0275element(4, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7, "Portability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Aplikasi berjalan konsisten di semua environment.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 65)(11, "div", 66);
    \u0275\u0275element(12, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "strong");
    \u0275\u0275text(15, "Consistency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, 'Mengurangi masalah "it works on my machine".');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 65)(19, "div", 66);
    \u0275\u0275element(20, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "strong");
    \u0275\u0275text(23, "Scalability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, "Mudah scale horizontal dengan Kubernetes.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 65)(27, "div", 66);
    \u0275\u0275element(28, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "strong");
    \u0275\u0275text(31, "Isolation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Process & filesystem isolation antar container.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 71)(35, "h4");
    \u0275\u0275text(36, "Dockerfile (Spring Boot)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "pre");
    \u0275\u0275text(38, 'FROM openjdk:17-jdk-alpine3.14\nENV APP_HOME=/usr/app/\nWORKDIR $APP_HOME\nCOPY target/*.jar app.jar\nEXPOSE 8000\nENTRYPOINT ["java","-jar","app.jar"]');
    \u0275\u0275elementEnd()()();
  }
}
function GuidanceComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 72)(2, "div", 73);
    \u0275\u0275element(3, "i", 74);
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "README.md");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Sertakan: Project Title, Overview, System Requirements, Dependencies, Installation, Usage, dan Contributor.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73);
    \u0275\u0275element(9, "i", 75);
    \u0275\u0275elementStart(10, "h4");
    \u0275\u0275text(11, "Compodoc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "Gunakan ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15, "@compodoc/compodoc");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " untuk generate dokumentasi TypeScript. Jangan lupa tambahkan ");
    \u0275\u0275elementStart(17, "code");
    \u0275\u0275text(18, "documentations/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " ke .gitignore.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 73);
    \u0275\u0275element(21, "i", 76);
    \u0275\u0275elementStart(22, "h4");
    \u0275\u0275text(23, "Postman Collection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, "Dokumentasikan semua API endpoint menggunakan Postman Collection.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 73);
    \u0275\u0275element(27, "i", 77);
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "Swagger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, "Integrasikan Swagger untuk auto-generate API documentation.");
    \u0275\u0275elementEnd()()()();
  }
}
var GuidanceComponent = class _GuidanceComponent {
  constructor() {
    this.sections = {
      cleanCode: false,
      techStack: false,
      folderStructure: false,
      namingConvention: false,
      gitRules: false,
      container: false,
      documentation: false
    };
  }
  toggleSection(key) {
    this.sections[key] = !this.sections[key];
  }
  static {
    this.\u0275fac = function GuidanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GuidanceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuidanceComponent, selectors: [["app-guidance"]], decls: 105, vars: 14, consts: [[1, "guidance-container"], [1, "guidance-header-banner"], [1, "banner-left"], [1, "fa-solid", "fa-book-open"], [1, "banner-right"], [1, "fa-solid", "fa-code"], [1, "download-strip"], [1, "download-item"], [1, "fa-solid", "fa-file-pdf"], ["href", "javascript:void(0)", 1, "download-btn"], [1, "fa-solid", "fa-download"], [1, "sop-section"], [1, "section-title", 3, "click"], [1, "section-title-left"], [1, "section-icon", "blue"], [1, "fa-solid", "fa-broom"], [1, "fa-solid", 3, "ngClass"], ["class", "section-body", 4, "ngIf"], [1, "section-icon", "green"], [1, "fa-solid", "fa-layer-group"], [1, "section-icon", "orange"], [1, "fa-solid", "fa-folder-tree"], [1, "section-icon", "purple"], [1, "fa-solid", "fa-spell-check"], [1, "section-icon", "red"], [1, "fa-brands", "fa-git-alt"], [1, "section-icon", "teal"], [1, "fa-brands", "fa-docker"], [1, "section-icon", "amber"], [1, "fa-solid", "fa-file-lines"], [1, "section-body"], [1, "principle-grid"], [1, "principle-card"], [1, "code-example"], [1, "tech-grid"], [1, "tech-card"], [1, "tech-icon"], [1, "fa-brands", "fa-java"], [1, "fa-brands", "fa-node-js"], [1, "fa-solid", "fa-mobile-screen-button"], [1, "fa-solid", "fa-database"], [1, "note-box"], [1, "fa-solid", "fa-circle-info"], [1, "folder-grid"], [1, "folder-card"], [1, "fa-solid", "fa-server"], [1, "code-block"], [1, "fa-solid", "fa-desktop"], [1, "convention-table"], [1, "badge", "blue"], [1, "badge", "green"], [1, "badge", "orange"], [1, "badge", "purple"], [1, "git-rules-grid"], [1, "git-card"], [1, "fa-solid", "fa-code-commit"], [1, "code-example", "small"], [1, "fa-solid", "fa-code-branch"], [1, "branch", "master"], [1, "branch", "staging"], [1, "branch", "dev"], [1, "branch", "feature"], [1, "fa-solid", "fa-code-pull-request"], [1, "fa-solid", "fa-triangle-exclamation"], [1, "container-benefits"], [1, "benefit-item"], [1, "benefit-icon"], [1, "fa-solid", "fa-box-open"], [1, "fa-solid", "fa-arrows-spin"], [1, "fa-solid", "fa-up-right-and-down-left-from-center"], [1, "fa-solid", "fa-shield-halved"], [1, "code-block", "mt-12"], [1, "doc-grid"], [1, "doc-card"], [1, "fa-brands", "fa-readme"], [1, "fa-solid", "fa-book"], [1, "fa-solid", "fa-paper-plane"], [1, "fa-solid", "fa-file-code"]], template: function GuidanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275element(4, "i", 3);
        \u0275\u0275text(5, " Technical Design Specification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Panduan standar teknis pengembangan aplikasi berdasarkan Technical Design Specification V2 \u2014 TDI-2.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
        \u0275\u0275element(12, "i", 8);
        \u0275\u0275elementStart(13, "div")(14, "strong");
        \u0275\u0275text(15, "Technical Design Specification V2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "Dokumen referensi lengkap standar teknis");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "a", 9);
        \u0275\u0275element(19, "i", 10);
        \u0275\u0275text(20, " Download PDF");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 11)(22, "div", 12);
        \u0275\u0275listener("click", function GuidanceComponent_Template_div_click_22_listener() {
          return ctx.toggleSection("cleanCode");
        });
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
        \u0275\u0275element(25, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div")(27, "h3");
        \u0275\u0275text(28, "Clean Code Principle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, "SOLID, KISS, DRY \u2014 prinsip dasar penulisan kode yang bersih dan maintainable.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(31, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, GuidanceComponent_div_32_Template, 49, 0, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 11)(34, "div", 12);
        \u0275\u0275listener("click", function GuidanceComponent_Template_div_click_34_listener() {
          return ctx.toggleSection("techStack");
        });
        \u0275\u0275elementStart(35, "div", 13)(36, "div", 18);
        \u0275\u0275element(37, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div")(39, "h3");
        \u0275\u0275text(40, "Technology Stack");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p");
        \u0275\u0275text(42, "Standar teknologi yang digunakan dalam pengembangan aplikasi TDI-2.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(43, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, GuidanceComponent_div_44_Template, 57, 0, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 11)(46, "div", 12);
        \u0275\u0275listener("click", function GuidanceComponent_Template_div_click_46_listener() {
          return ctx.toggleSection("folderStructure");
        });
        \u0275\u0275elementStart(47, "div", 13)(48, "div", 20);
        \u0275\u0275element(49, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div")(51, "h3");
        \u0275\u0275text(52, "Folder Structure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54, "Standar struktur folder untuk Backend dan Frontend project.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(55, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, GuidanceComponent_div_56_Template, 16, 0, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 11)(58, "div", 12);
        \u0275\u0275listener("click", function GuidanceComponent_Template_div_click_58_listener() {
          return ctx.toggleSection("namingConvention");
        });
        \u0275\u0275elementStart(59, "div", 13)(60, "div", 22);
        \u0275\u0275element(61, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div")(63, "h3");
        \u0275\u0275text(64, "Naming Convention");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p");
        \u0275\u0275text(66, "Standar penamaan file, class, method, dan variable.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(67, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(68, GuidanceComponent_div_68_Template, 66, 0, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 11)(70, "div", 12);
        \u0275\u0275listener("click", function GuidanceComponent_Template_div_click_70_listener() {
          return ctx.toggleSection("gitRules");
        });
        \u0275\u0275elementStart(71, "div", 13)(72, "div", 24);
        \u0275\u0275element(73, "i", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div")(75, "h3");
        \u0275\u0275text(76, "Git Versioning & Rules");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p");
        \u0275\u0275text(78, "Aturan commit message, branching strategy (Git-flow), tagging, dan pull request.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(79, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(80, GuidanceComponent_div_80_Template, 77, 0, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 11)(82, "div", 12);
        \u0275\u0275listener("click", function GuidanceComponent_Template_div_click_82_listener() {
          return ctx.toggleSection("container");
        });
        \u0275\u0275elementStart(83, "div", 13)(84, "div", 26);
        \u0275\u0275element(85, "i", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div")(87, "h3");
        \u0275\u0275text(88, "Containerization & Deployment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "p");
        \u0275\u0275text(90, "Standar Docker, docker-compose, dan containerizing application.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(91, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(92, GuidanceComponent_div_92_Template, 39, 0, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 11)(94, "div", 12);
        \u0275\u0275listener("click", function GuidanceComponent_Template_div_click_94_listener() {
          return ctx.toggleSection("documentation");
        });
        \u0275\u0275elementStart(95, "div", 13)(96, "div", 28);
        \u0275\u0275element(97, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div")(99, "h3");
        \u0275\u0275text(100, "Project Documentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "p");
        \u0275\u0275text(102, "Standar dokumentasi README.md, Compodoc, Postman, dan Swagger.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(103, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(104, GuidanceComponent_div_104_Template, 32, 0, "div", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(31);
        \u0275\u0275property("ngClass", ctx.sections["cleanCode"] ? "fa-chevron-up" : "fa-chevron-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sections["cleanCode"]);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngClass", ctx.sections["techStack"] ? "fa-chevron-up" : "fa-chevron-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sections["techStack"]);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngClass", ctx.sections["folderStructure"] ? "fa-chevron-up" : "fa-chevron-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sections["folderStructure"]);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngClass", ctx.sections["namingConvention"] ? "fa-chevron-up" : "fa-chevron-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sections["namingConvention"]);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngClass", ctx.sections["gitRules"] ? "fa-chevron-up" : "fa-chevron-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sections["gitRules"]);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngClass", ctx.sections["container"] ? "fa-chevron-up" : "fa-chevron-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sections["container"]);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngClass", ctx.sections["documentation"] ? "fa-chevron-up" : "fa-chevron-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sections["documentation"]);
      }
    }, dependencies: [CommonModule, NgClass, NgIf], styles: ['\n\n.guidance-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.guidance-header-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  border-radius: 16px;\n  padding: 24px 30px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 10px 25px -5px rgba(30, 41, 59, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.guidance-header-banner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 60%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.banner-left[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 600px;\n}\n.banner-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.banner-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.4;\n  margin: 0;\n}\n.banner-right[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  color: rgba(255, 255, 255, 0.08);\n  position: relative;\n  z-index: 2;\n  margin-right: 20px;\n}\n.download-strip[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.download-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.download-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #dc2626;\n  flex-shrink: 0;\n}\n.download-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.download-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-main);\n}\n.download-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.download-btn[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n}\n.sop-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.3s;\n}\n.sop-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.2s;\n}\n.section-title[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.section-title-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.section-icon.blue[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.section-icon.green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.section-icon.orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #ea580c;\n}\n.section-icon.purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.section-icon.red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.section-icon.teal[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n  color: #0d9488;\n}\n.section-icon.amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-main);\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.section-title[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.section-body[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n  border-top: 1px solid var(--border-color);\n  animation: _ngcontent-%COMP%_slideDown 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.principle-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.principle-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n}\n.principle-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: var(--text-main);\n}\n.principle-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  margin: 0;\n  list-style: none;\n}\n.principle-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #475569;\n  line-height: 1.6;\n  position: relative;\n  padding-left: 8px;\n}\n.principle-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  color: #0ea5e9;\n  font-weight: bold;\n  position: absolute;\n  left: -10px;\n}\n.principle-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #475569;\n  margin: 0;\n  line-height: 1.5;\n}\n.code-example[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 12px 14px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-family: "Courier New", monospace;\n  margin-top: 10px;\n  overflow-x: auto;\n}\n.code-example.small[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n}\n.tech-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.tech-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  text-align: center;\n}\n.tech-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #0ea5e9;\n  margin-bottom: 8px;\n}\n.tech-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n  color: var(--text-main);\n}\n.tech-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.tech-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #475569;\n  line-height: 1.8;\n}\n.note-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-top: 14px;\n  font-size: 0.82rem;\n  color: #1e40af;\n}\n.note-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.folder-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.folder-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n}\n.folder-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: var(--text-main);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.code-block[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.code-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #94a3b8;\n  padding: 8px 14px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  padding: 14px;\n  font-size: 0.75rem;\n  font-family: "Courier New", monospace;\n  margin: 0;\n  line-height: 1.6;\n  overflow-x: auto;\n}\n.mt-12[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.convention-table[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  overflow-x: auto;\n}\n.convention-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.convention-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  text-align: left;\n  padding: 10px 14px;\n  font-weight: 700;\n  color: var(--text-main);\n  border-bottom: 2px solid #e2e8f0;\n}\n.convention-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  color: #475569;\n}\n.convention-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  color: #1e293b;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n.badge.blue[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.badge.green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #ea580c;\n}\n.badge.purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.git-rules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.git-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n}\n.git-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: var(--text-main);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.git-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.git-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #475569;\n  line-height: 1.8;\n  padding-left: 12px;\n  position: relative;\n}\n.git-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\203a";\n  color: #0ea5e9;\n  font-weight: bold;\n  position: absolute;\n  left: 0;\n}\n.git-card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n}\n.branch[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 8px;\n  border-radius: 4px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  font-family: "Courier New", monospace;\n}\n.branch.master[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.branch.staging[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.branch.dev[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.branch.feature[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.container-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.benefit-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 14px;\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #ccfbf1;\n  color: #0d9488;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.benefit-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-main);\n}\n.benefit-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.doc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.doc-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  text-align: center;\n}\n.doc-card[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #0ea5e9;\n  margin-bottom: 8px;\n}\n.doc-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: var(--text-main);\n}\n.doc-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #475569;\n  margin: 0;\n  line-height: 1.5;\n}\n.doc-card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.72rem;\n}\n@media (max-width: 768px) {\n  .guidance-header-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 12px;\n    padding: 20px;\n  }\n  .banner-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .banner-left[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .download-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .section-body[_ngcontent-%COMP%] {\n    padding: 0 16px 16px;\n  }\n  .principle-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tech-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .folder-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .git-rules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .container-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .doc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .guidance-header-banner[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 12px;\n  }\n  .banner-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .banner-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .download-strip[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .section-title-left[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .section-icon[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 0.95rem;\n  }\n  .section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .section-body[_ngcontent-%COMP%] {\n    padding: 0 12px 12px;\n  }\n  .tech-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .doc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n  }\n  .convention-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=guidance.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GuidanceComponent, [{
    type: Component,
    args: [{ selector: "app-guidance", standalone: true, imports: [CommonModule], template: `<div class="guidance-container">
  <div class="guidance-header-banner">
    <div class="banner-left">
      <h2><i class="fa-solid fa-book-open"></i> Technical Design Specification</h2>
      <p>Panduan standar teknis pengembangan aplikasi berdasarkan Technical Design Specification V2 \u2014 TDI-2.</p>
    </div>
    <div class="banner-right">
      <i class="fa-solid fa-code"></i>
    </div>
  </div>

  <!-- Quick Download -->
  <div class="download-strip">
    <div class="download-item">
      <i class="fa-solid fa-file-pdf"></i>
      <div>
        <strong>Technical Design Specification V2</strong>
        <span>Dokumen referensi lengkap standar teknis</span>
      </div>
      <a href="javascript:void(0)" class="download-btn"><i class="fa-solid fa-download"></i> Download PDF</a>
    </div>
  </div>

  <!-- Section: Clean Code -->
  <div class="sop-section">
    <div class="section-title" (click)="toggleSection('cleanCode')">
      <div class="section-title-left">
        <div class="section-icon blue"><i class="fa-solid fa-broom"></i></div>
        <div>
          <h3>Clean Code Principle</h3>
          <p>SOLID, KISS, DRY \u2014 prinsip dasar penulisan kode yang bersih dan maintainable.</p>
        </div>
      </div>
      <i class="fa-solid" [ngClass]="sections['cleanCode'] ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
    </div>
    <div class="section-body" *ngIf="sections['cleanCode']">
      <div class="principle-grid">
        <div class="principle-card">
          <h4>SOLID Principle</h4>
          <ul>
            <li><strong>S</strong> \u2014 Single Responsibility: Class hanya memiliki satu tanggung jawab.</li>
            <li><strong>O</strong> \u2014 Open/Closed: Terbuka untuk ekstensi, tertutup untuk modifikasi.</li>
            <li><strong>L</strong> \u2014 Liskov Substitution: Subtype harus bisa menggantikan base type.</li>
            <li><strong>I</strong> \u2014 Interface Segregation: Interface kecil dan fokus.</li>
            <li><strong>D</strong> \u2014 Dependency Inversion: Modul high-level tidak bergantung pada low-level.</li>
          </ul>
        </div>
        <div class="principle-card">
          <h4>KISS Principle</h4>
          <p><em>"Keep It Simple, Stupid"</em> \u2014 Hindari kompleksitas yang tidak perlu. Rancang solusi yang sederhana, fungsional, dan mudah dipahami.</p>
        </div>
        <div class="principle-card">
          <h4>DRY Principle</h4>
          <p><em>"Don't Repeat Yourself"</em> \u2014 Hindari duplikasi kode. Gunakan abstraksi dan reuse code untuk mengurangi redundansi.</p>
          <div class="code-example">
            <code>export abstract class BaseComponent implements OnDestroy &#123;<br>&nbsp;&nbsp;unsubscribe$: Subject&lt;void&gt; = new Subject&lt;void&gt;();<br>&nbsp;&nbsp;ngOnDestroy(): void &#123; this.unsubscribe$.next(); &#125;<br>&#125;</code>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section: Technology Stack -->
  <div class="sop-section">
    <div class="section-title" (click)="toggleSection('techStack')">
      <div class="section-title-left">
        <div class="section-icon green"><i class="fa-solid fa-layer-group"></i></div>
        <div>
          <h3>Technology Stack</h3>
          <p>Standar teknologi yang digunakan dalam pengembangan aplikasi TDI-2.</p>
        </div>
      </div>
      <i class="fa-solid" [ngClass]="sections['techStack'] ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
    </div>
    <div class="section-body" *ngIf="sections['techStack']">
      <div class="tech-grid">
        <div class="tech-card">
          <div class="tech-icon"><i class="fa-brands fa-java"></i></div>
          <h4>Java Environment</h4>
          <ul>
            <li>JDK 17.0.6 LTS</li>
            <li>Spring Boot 2.x / 3.x</li>
            <li>Quarkus / Micronaut</li>
          </ul>
        </div>
        <div class="tech-card">
          <div class="tech-icon"><i class="fa-brands fa-node-js"></i></div>
          <h4>NodeJS Environment</h4>
          <ul>
            <li>NodeJS 18.12.0 / 20.9.0 LTS</li>
            <li>Angular</li>
            <li>NestJS / RxJs</li>
          </ul>
        </div>
        <div class="tech-card">
          <div class="tech-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
          <h4>Dart / Flutter</h4>
          <ul>
            <li>Dart (latest version)</li>
            <li>Flutter (latest version)</li>
            <li>GetX State Management</li>
          </ul>
        </div>
        <div class="tech-card">
          <div class="tech-icon"><i class="fa-solid fa-database"></i></div>
          <h4>Database & Tools</h4>
          <ul>
            <li>PostgreSQL 13.5+</li>
            <li>Redis / MongoDB / Elastic</li>
            <li>Kafka / RabbitMQ</li>
          </ul>
        </div>
      </div>
      <div class="note-box">
        <i class="fa-solid fa-circle-info"></i>
        <span>Gunakan versi <strong>LTS</strong> untuk stabilitas, keamanan, dan kompatibilitas enterprise.</span>
      </div>
    </div>
  </div>

  <!-- Section: Folder Structure -->
  <div class="sop-section">
    <div class="section-title" (click)="toggleSection('folderStructure')">
      <div class="section-title-left">
        <div class="section-icon orange"><i class="fa-solid fa-folder-tree"></i></div>
        <div>
          <h3>Folder Structure</h3>
          <p>Standar struktur folder untuk Backend dan Frontend project.</p>
        </div>
      </div>
      <i class="fa-solid" [ngClass]="sections['folderStructure'] ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
    </div>
    <div class="section-body" *ngIf="sections['folderStructure']">
      <div class="folder-grid">
        <div class="folder-card">
          <h4><i class="fa-solid fa-server"></i> Backend (Module-based)</h4>
          <div class="code-block">
            <pre>app/
\u2514\u2500\u2500 modules/
    \u2514\u2500\u2500 user/
        \u251C\u2500\u2500 UserController.java
        \u251C\u2500\u2500 UserService.java
        \u251C\u2500\u2500 UserRepository.java
        \u2514\u2500\u2500 dtos/
            \u251C\u2500\u2500 UserDto.java
            \u2514\u2500\u2500 InsertUserDto.java</pre>
          </div>
        </div>
        <div class="folder-card">
          <h4><i class="fa-solid fa-desktop"></i> Frontend (Angular)</h4>
          <div class="code-block">
            <pre>app-frontend/
\u251C\u2500\u2500 core/
\u2502   \u251C\u2500\u2500 base-service.ts
\u2502   \u2514\u2500\u2500 guards/
\u251C\u2500\u2500 pages/
\u2502   \u2514\u2500\u2500 users/
\u2502       \u251C\u2500\u2500 sub-pages/
\u2502       \u2514\u2500\u2500 components/
\u2514\u2500\u2500 shared/
    \u251C\u2500\u2500 layouts/
    \u251C\u2500\u2500 reusable-components/
    \u251C\u2500\u2500 utils/
    \u2514\u2500\u2500 dtos/</pre>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section: Naming Convention -->
  <div class="sop-section">
    <div class="section-title" (click)="toggleSection('namingConvention')">
      <div class="section-title-left">
        <div class="section-icon purple"><i class="fa-solid fa-spell-check"></i></div>
        <div>
          <h3>Naming Convention</h3>
          <p>Standar penamaan file, class, method, dan variable.</p>
        </div>
      </div>
      <i class="fa-solid" [ngClass]="sections['namingConvention'] ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
    </div>
    <div class="section-body" *ngIf="sections['namingConvention']">
      <div class="convention-table">
        <table>
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Format</th>
              <th>Contoh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>File (TypeScript)</td>
              <td><span class="badge blue">kebab-case</span></td>
              <td><code>man-power.service.ts</code></td>
            </tr>
            <tr>
              <td>File (Java)</td>
              <td><span class="badge green">PascalCase</span></td>
              <td><code>ManPowerService.java</code></td>
            </tr>
            <tr>
              <td>File (Dart)</td>
              <td><span class="badge orange">snake_case</span></td>
              <td><code>man_power.service.dart</code></td>
            </tr>
            <tr>
              <td>Class / Interface</td>
              <td><span class="badge green">PascalCase</span></td>
              <td><code>UserServiceImpl</code></td>
            </tr>
            <tr>
              <td>Method / Function</td>
              <td><span class="badge purple">camelCase</span></td>
              <td><code>getUserById()</code></td>
            </tr>
            <tr>
              <td>Variable / Const</td>
              <td><span class="badge purple">camelCase</span></td>
              <td><code>personalNumber</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Section: Git Versioning -->
  <div class="sop-section">
    <div class="section-title" (click)="toggleSection('gitRules')">
      <div class="section-title-left">
        <div class="section-icon red"><i class="fa-brands fa-git-alt"></i></div>
        <div>
          <h3>Git Versioning & Rules</h3>
          <p>Aturan commit message, branching strategy (Git-flow), tagging, dan pull request.</p>
        </div>
      </div>
      <i class="fa-solid" [ngClass]="sections['gitRules'] ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
    </div>
    <div class="section-body" *ngIf="sections['gitRules']">
      <div class="git-rules-grid">
        <div class="git-card">
          <h4><i class="fa-solid fa-code-commit"></i> Commit Message</h4>
          <ul>
            <li>Gunakan bracket: <code>[add]</code>, <code>[update]</code>, <code>[remove]</code></li>
            <li>Gunakan present tense & imperative mood</li>
            <li>Subject line max 50 karakter</li>
            <li>Capitalize huruf pertama</li>
          </ul>
          <div class="code-example small">
            <code>[add] color change logic on button<br>[update] layout design<br>[remove] deprecated function</code>
          </div>
        </div>
        <div class="git-card">
          <h4><i class="fa-solid fa-code-branch"></i> Git-flow Branches</h4>
          <ul>
            <li><span class="branch master">master</span> \u2014 Production-ready code</li>
            <li><span class="branch staging">staging</span> \u2014 Staging changes</li>
            <li><span class="branch dev">development</span> \u2014 Main development</li>
            <li><span class="branch feature">feature/*</span> \u2014 New features</li>
          </ul>
        </div>
        <div class="git-card">
          <h4><i class="fa-solid fa-code-pull-request"></i> Pull Request</h4>
          <ul>
            <li>Buka PR setelah push ke branch</li>
            <li>Diskusi dan review dengan collaborator</li>
            <li>Tambahkan follow-up commits jika perlu</li>
            <li>Merge ke base branch setelah approval</li>
          </ul>
        </div>
        <div class="git-card">
          <h4><i class="fa-solid fa-triangle-exclamation"></i> Best Practices</h4>
          <ul>
            <li>Gunakan single repository</li>
            <li>Gunakan tags untuk releases</li>
            <li>Hindari binary files di repo</li>
            <li>Jangan simpan password di repository</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Section: Containerization -->
  <div class="sop-section">
    <div class="section-title" (click)="toggleSection('container')">
      <div class="section-title-left">
        <div class="section-icon teal"><i class="fa-brands fa-docker"></i></div>
        <div>
          <h3>Containerization & Deployment</h3>
          <p>Standar Docker, docker-compose, dan containerizing application.</p>
        </div>
      </div>
      <i class="fa-solid" [ngClass]="sections['container'] ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
    </div>
    <div class="section-body" *ngIf="sections['container']">
      <div class="container-benefits">
        <div class="benefit-item">
          <div class="benefit-icon"><i class="fa-solid fa-box-open"></i></div>
          <div>
            <strong>Portability</strong>
            <p>Aplikasi berjalan konsisten di semua environment.</p>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon"><i class="fa-solid fa-arrows-spin"></i></div>
          <div>
            <strong>Consistency</strong>
            <p>Mengurangi masalah "it works on my machine".</p>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></div>
          <div>
            <strong>Scalability</strong>
            <p>Mudah scale horizontal dengan Kubernetes.</p>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon"><i class="fa-solid fa-shield-halved"></i></div>
          <div>
            <strong>Isolation</strong>
            <p>Process & filesystem isolation antar container.</p>
          </div>
        </div>
      </div>
      <div class="code-block mt-12">
        <h4>Dockerfile (Spring Boot)</h4>
        <pre>FROM openjdk:17-jdk-alpine3.14
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY target/*.jar app.jar
EXPOSE 8000
ENTRYPOINT ["java","-jar","app.jar"]</pre>
      </div>
    </div>
  </div>

  <!-- Section: Documentation -->
  <div class="sop-section">
    <div class="section-title" (click)="toggleSection('documentation')">
      <div class="section-title-left">
        <div class="section-icon amber"><i class="fa-solid fa-file-lines"></i></div>
        <div>
          <h3>Project Documentation</h3>
          <p>Standar dokumentasi README.md, Compodoc, Postman, dan Swagger.</p>
        </div>
      </div>
      <i class="fa-solid" [ngClass]="sections['documentation'] ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
    </div>
    <div class="section-body" *ngIf="sections['documentation']">
      <div class="doc-grid">
        <div class="doc-card">
          <i class="fa-brands fa-readme"></i>
          <h4>README.md</h4>
          <p>Sertakan: Project Title, Overview, System Requirements, Dependencies, Installation, Usage, dan Contributor.</p>
        </div>
        <div class="doc-card">
          <i class="fa-solid fa-book"></i>
          <h4>Compodoc</h4>
          <p>Gunakan <code>&#64;compodoc/compodoc</code> untuk generate dokumentasi TypeScript. Jangan lupa tambahkan <code>documentations/</code> ke .gitignore.</p>
        </div>
        <div class="doc-card">
          <i class="fa-solid fa-paper-plane"></i>
          <h4>Postman Collection</h4>
          <p>Dokumentasikan semua API endpoint menggunakan Postman Collection.</p>
        </div>
        <div class="doc-card">
          <i class="fa-solid fa-file-code"></i>
          <h4>Swagger</h4>
          <p>Integrasikan Swagger untuk auto-generate API documentation.</p>
        </div>
      </div>
    </div>
  </div>

</div>
`, styles: ['/* src/app-frontend/pages/guidance/guidance.component.css */\n.guidance-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.guidance-header-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  border-radius: 16px;\n  padding: 24px 30px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 10px 25px -5px rgba(30, 41, 59, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.guidance-header-banner::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 60%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.banner-left {\n  position: relative;\n  z-index: 2;\n  max-width: 600px;\n}\n.banner-left h2 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.banner-left p {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.4;\n  margin: 0;\n}\n.banner-right {\n  font-size: 4.5rem;\n  color: rgba(255, 255, 255, 0.08);\n  position: relative;\n  z-index: 2;\n  margin-right: 20px;\n}\n.download-strip {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.download-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.download-item > i {\n  font-size: 2rem;\n  color: #dc2626;\n  flex-shrink: 0;\n}\n.download-item > div {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.download-item > div strong {\n  font-size: 0.95rem;\n  color: var(--text-main);\n}\n.download-item > div span {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.download-btn {\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.download-btn:hover {\n  background: #0284c7;\n}\n.sop-section {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.3s;\n}\n.sop-section:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.2s;\n}\n.section-title:hover {\n  background: #f8fafc;\n}\n.section-title-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.section-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.section-icon.blue {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.section-icon.green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.section-icon.orange {\n  background: #ffedd5;\n  color: #ea580c;\n}\n.section-icon.purple {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.section-icon.red {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.section-icon.teal {\n  background: #ccfbf1;\n  color: #0d9488;\n}\n.section-icon.amber {\n  background: #fef3c7;\n  color: #d97706;\n}\n.section-title h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-main);\n}\n.section-title p {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.section-title > i {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.section-body {\n  padding: 0 20px 20px;\n  border-top: 1px solid var(--border-color);\n  animation: slideDown 0.25s ease;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.principle-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.principle-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n}\n.principle-card h4 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: var(--text-main);\n}\n.principle-card ul {\n  padding-left: 18px;\n  margin: 0;\n  list-style: none;\n}\n.principle-card ul li {\n  font-size: 0.82rem;\n  color: #475569;\n  line-height: 1.6;\n  position: relative;\n  padding-left: 8px;\n}\n.principle-card ul li::before {\n  content: "\\2022";\n  color: #0ea5e9;\n  font-weight: bold;\n  position: absolute;\n  left: -10px;\n}\n.principle-card p {\n  font-size: 0.82rem;\n  color: #475569;\n  margin: 0;\n  line-height: 1.5;\n}\n.code-example {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 12px 14px;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-family: "Courier New", monospace;\n  margin-top: 10px;\n  overflow-x: auto;\n}\n.code-example.small {\n  font-size: 0.73rem;\n}\n.tech-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.tech-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  text-align: center;\n}\n.tech-icon {\n  font-size: 2rem;\n  color: #0ea5e9;\n  margin-bottom: 8px;\n}\n.tech-card h4 {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 8px;\n  color: var(--text-main);\n}\n.tech-card ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.tech-card ul li {\n  font-size: 0.8rem;\n  color: #475569;\n  line-height: 1.8;\n}\n.note-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-top: 14px;\n  font-size: 0.82rem;\n  color: #1e40af;\n}\n.note-box i {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.folder-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.folder-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n}\n.folder-card h4 {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: var(--text-main);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.code-block {\n  background: #1e293b;\n  color: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.code-block h4 {\n  background: #0f172a;\n  color: #94a3b8;\n  padding: 8px 14px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.code-block pre {\n  padding: 14px;\n  font-size: 0.75rem;\n  font-family: "Courier New", monospace;\n  margin: 0;\n  line-height: 1.6;\n  overflow-x: auto;\n}\n.mt-12 {\n  margin-top: 12px;\n}\n.convention-table {\n  margin-top: 16px;\n  overflow-x: auto;\n}\n.convention-table table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.convention-table th {\n  background: #f1f5f9;\n  text-align: left;\n  padding: 10px 14px;\n  font-weight: 700;\n  color: var(--text-main);\n  border-bottom: 2px solid #e2e8f0;\n}\n.convention-table td {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  color: #475569;\n}\n.convention-table code {\n  background: #f1f5f9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  color: #1e293b;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n.badge.blue {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.badge.green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.orange {\n  background: #ffedd5;\n  color: #ea580c;\n}\n.badge.purple {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.git-rules-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.git-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n}\n.git-card h4 {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: var(--text-main);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.git-card ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.git-card ul li {\n  font-size: 0.8rem;\n  color: #475569;\n  line-height: 1.8;\n  padding-left: 12px;\n  position: relative;\n}\n.git-card ul li::before {\n  content: "\\203a";\n  color: #0ea5e9;\n  font-weight: bold;\n  position: absolute;\n  left: 0;\n}\n.git-card code {\n  background: #e2e8f0;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n}\n.branch {\n  display: inline-block;\n  padding: 1px 8px;\n  border-radius: 4px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  font-family: "Courier New", monospace;\n}\n.branch.master {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.branch.staging {\n  background: #fef3c7;\n  color: #d97706;\n}\n.branch.dev {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.branch.feature {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.container-benefits {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.benefit-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 14px;\n}\n.benefit-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #ccfbf1;\n  color: #0d9488;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.benefit-item strong {\n  font-size: 0.85rem;\n  color: var(--text-main);\n}\n.benefit-item p {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.doc-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n  margin-top: 16px;\n}\n.doc-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  text-align: center;\n}\n.doc-card > i {\n  font-size: 2rem;\n  color: #0ea5e9;\n  margin-bottom: 8px;\n}\n.doc-card h4 {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: var(--text-main);\n}\n.doc-card p {\n  font-size: 0.78rem;\n  color: #475569;\n  margin: 0;\n  line-height: 1.5;\n}\n.doc-card code {\n  background: #e2e8f0;\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-size: 0.72rem;\n}\n@media (max-width: 768px) {\n  .guidance-header-banner {\n    flex-direction: column;\n    text-align: center;\n    gap: 12px;\n    padding: 20px;\n  }\n  .banner-right {\n    display: none;\n  }\n  .banner-left {\n    max-width: 100%;\n  }\n  .download-item {\n    flex-direction: column;\n    text-align: center;\n  }\n  .section-title {\n    padding: 14px 16px;\n  }\n  .section-body {\n    padding: 0 16px 16px;\n  }\n  .principle-grid {\n    grid-template-columns: 1fr;\n  }\n  .tech-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .folder-grid {\n    grid-template-columns: 1fr;\n  }\n  .git-rules-grid {\n    grid-template-columns: 1fr;\n  }\n  .container-benefits {\n    grid-template-columns: 1fr;\n  }\n  .doc-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .guidance-header-banner {\n    padding: 16px;\n    border-radius: 12px;\n  }\n  .banner-left h2 {\n    font-size: 1.1rem;\n  }\n  .banner-left p {\n    font-size: 0.78rem;\n  }\n  .download-strip {\n    padding: 12px 14px;\n  }\n  .section-title {\n    padding: 12px;\n  }\n  .section-title-left {\n    gap: 10px;\n  }\n  .section-icon {\n    width: 36px;\n    height: 36px;\n    font-size: 0.95rem;\n  }\n  .section-title h3 {\n    font-size: 0.9rem;\n  }\n  .section-body {\n    padding: 0 12px 12px;\n  }\n  .tech-grid {\n    grid-template-columns: 1fr;\n  }\n  .doc-grid {\n    grid-template-columns: 1fr;\n  }\n  .code-block pre {\n    font-size: 0.68rem;\n  }\n  .convention-table table {\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=guidance.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuidanceComponent, { className: "GuidanceComponent", filePath: "src/app-frontend/pages/guidance/guidance.component.ts", lineNumber: 11 });
})();
export {
  GuidanceComponent
};
//# sourceMappingURL=chunk-LXTVCUIS.js.map
