# GBDPS-APP Integration Diagram

File ini memuat diagram integrasi sistem (Integration Diagram) untuk aplikasi GBDPS-APP. Diagram di bawah ini menggunakan format teks **Mermaid**, yang secara otomatis dapat dirender di platform yang mendukung Markdown seperti GitHub, GitLab, Notion, atau alat *preview* editor.

## Alur Singkat:
1. **User / Admin** berinteraksi dengan **Frontend (GBDPS-APP)**, mengunggah data scan dan mengekspor Data Excel dari sistem bea cukai (CEISA).
2. Modul **Upload Data BC** secara logika menerima *file* ekspor dari CEISA, tempat data kemudian dikirim ke Backend Server melalui panggilan REST API.
3. **Backend API** memvalidasi dokumen, mengurai data (Excel/CSV), dan memutakhirkan posisi stok, laporan pencatatan barang (Pemasukan, GR/GI, dsb.).
4. Data transaksi dan master barang disimpan dalam **Database (RDBMS)**, sedangkan aset dokumen fisik (*scan*) dimasukkan ke dalam **File Storage**.

## Diagram Integrasi

```mermaid
graph TD
    classDef user fill:#6366f1,stroke:#4f46e5,stroke-width:2px,color:#fff;
    classDef frontend fill:#0ea5e9,stroke:#0284c7,stroke-width:2px,color:#fff;
    classDef backend fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff;
    classDef database fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff;
    classDef external fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff;

    User([👤 User / Admin]):::user
    
    subgraph Frontend [🌐 GBDPS-APP (Angular Frontend)]
        UI[💻 User Interface]:::frontend
        Upload[📥 Module Upload Scan & BC]:::frontend
        Reports[📊 Module Laporan & Histori]:::frontend
        Stock[📦 Module Pencatatan & GR/GI]:::frontend
    end
    
    subgraph Backend [⚙️ Backend Server Services]
        API[🔌 RESTful API Gateway]:::backend
        Auth[🔐 Authentication Service]:::backend
        FileProcessor[📄 Document & Excel Parser]:::backend
        StockEngine[🧮 Inventory & Mutation Engine]:::backend
    end
    
    subgraph DataStorage [💾 Data & Storage]
        DB[(🗄️ Relational Database)]:::database
        FileStore[(☁️ File Storage - PDF/JPG)]:::database
    end
    
    subgraph External [🌍 External Systems]
        CEISA[Customs / Sistem CEISA]:::external
    end
    
    %% External Action
    CEISA -.->|Eksport Data File Excel/CSV Data BC| User
    
    %% User Interactions
    User -->|Akses Dashboard & Aplikasi| UI
    User -->|Seret & Unggah File Scan/BC| Upload
    User -->|Kelola Barang, Adjustment, Stock Opname| Stock
    User -->|Lihat & Cetak Laporan Mutasi| Reports

    %% Font-end connections
    UI --> Upload
    UI --> Stock
    UI --> Reports

    %% API Requests
    Upload -->|Kirim File (FormData)| API
    Stock -->|CRUD Pencatatan| API
    Reports -->|Request Laporan| API
    UI -->|Validasi Akses| API

    %% Backend Processing
    API --> Auth
    API --> FileProcessor
    API --> StockEngine
    
    %% Storage Operations
    FileProcessor -->|Simpan Berkas Fisik| FileStore
    FileProcessor -->|Ekstrak Data Baris Excel| DB
    StockEngine -->|Insert/Update Mutasi & Stok| DB
    Auth -->|Validasi User| DB
    
    %% Logical linkage for CEISA
    CEISA -.->|Aturan Bisnis & Validasi Dokumen| FileProcessor
```

## Pengelompokkan Modul
*   **🌐 Frontend:** Lingkup SPA (Single Page Application) dibangun menggunakan Framework Angular. Menyediakan seluruh *interface* responsif yang kita rancang.
*   **⚙️ Backend:** Server yang berpotensi berbasis Node.js/Java/Python, melayani titik REST API. Menangani keamanan (CORS/CSRF), serta mengolah *logic* untuk parsing Excel.
*   **💾 Database & Storage:** Menyimpan data terstrukur (Stok, Posisi, Laporan) pada DBMS relasional (Misal: PostgreSQL / MySQL) dan server file seperti S3 Bucket / Storage lokal server untuk dokumen *scan* PDF/JPG.
*   **🌍 Eksternal:** Sistem CEISA bertindak sebagai asal otoritatif dari Data Pabean (Dokumen BC).
