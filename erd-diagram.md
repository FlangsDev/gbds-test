# GBDPS-APP Entity Relationship Diagram (ERD)

File ini memuat rancangan *Entity Relationship Diagram* (ERD) untuk aplikasi **GBDPS-APP**. 
Format yang digunakan di bawah adalah **DBML** *(Database Markup Language)*.

## Cara Penggunaan
Anda dapat menyalin *code block* di bawah ini seluruhnya (tanpa *backticks* markdown), lalu meletakkannya atau mem-_paste_ di situs seperti [**dbdiagram.io**](https://dbdiagram.io) untuk secara otomatis merender skema tabel beserta relasi (*foreign keys*)-nya menjadi visual.

```dbml
// ==========================================
// SKEMA DATABASE GBDPS-APP (DBML)
// Salin dan tempel ke dbdiagram.io
// ==========================================

// 1. Data Core / Master
Table pengguna {
  id varchar [primary key, note: 'UUID']
  nama_pengguna varchar [unique, not null]
  hash_kata_sandi varchar
  peran varchar [note: 'Admin, Operator, dll']
  dibuat_pada timestamp
}

Table barang {
  id varchar [primary key, note: 'UUID']
  kode_barang varchar [unique, not null, note: 'Kode Barang / SKU']
  uraian_barang text [note: 'Nama atau Uraian Barang']
  satuan varchar [note: 'Satuan (Pcs, Kg, dll)']
  kategori varchar [note: 'Bahan Baku, Barang Jadi, dll']
  dibuat_pada timestamp
}

Table inventaris {
  id varchar [primary key, note: 'UUID']
  id_barang varchar [ref: > barang.id]
  kuantitas decimal [note: 'Jumlah / Saldo Akhir saat ini']
  terakhir_diperbarui timestamp
}

// 2. Data Dokumen Kepabeanan
Table dokumen_bc {
  id varchar [primary key, note: 'UUID']
  jenis_bc varchar [note: '2.3, 2.5, 2.6, 2.7, 4.0']
  nomor_pengajuan varchar [note: 'Nomor Pengajuan (No AJU)']
  nomor_pendaftaran varchar [note: 'Nomor Pendaftaran']
  tanggal_dokumen date [note: 'Tanggal BC']
  path_file varchar [note: 'Path/URL file Excel/CSV (CEISA) yang diupload']
  diupload_oleh varchar [ref: > pengguna.id]
  dibuat_pada timestamp
}

Table dokumen_scan {
  id varchar [primary key, note: 'UUID']
  id_dokumen_bc varchar [ref: > dokumen_bc.id]
  path_file varchar [note: 'Path/URL file PDF/JPG Scan yang diupload']
  tipe_file varchar [note: 'pdf, jpg, png']
  diupload_oleh varchar [ref: > pengguna.id]
  diupload_pada timestamp
}

// 3. Transaksi (Pemasukan & Pengeluaran)
Table pemasukan_barang {
  id varchar [primary key, note: 'UUID']
  nomor_penerimaan varchar [unique, note: 'Nomor Good Receipt (GR)']
  id_dokumen_bc varchar [ref: > dokumen_bc.id, note: 'Dokumen BC yang melandasi pemasukan']
  tanggal_penerimaan date
  nama_pemasok varchar [note: 'Supplier']
  dibuat_oleh varchar [ref: > pengguna.id]
  dibuat_pada timestamp
}

Table detail_pemasukan_barang {
  id varchar [primary key, note: 'UUID']
  id_pemasukan varchar [ref: > pemasukan_barang.id]
  id_barang varchar [ref: > barang.id]
  kuantitas decimal
}

Table pengeluaran_barang {
  id varchar [primary key, note: 'UUID']
  nomor_pengeluaran varchar [unique, note: 'Nomor Good Issue (GI)']
  id_dokumen_bc varchar [ref: > dokumen_bc.id, note: 'Dokumen BC yang melandasi pengeluaran']
  tanggal_pengeluaran date
  nama_pembeli varchar [note: 'Buyer']
  dikirim_ke varchar [note: 'Shipped To']
  dibuat_oleh varchar [ref: > pengguna.id]
  dibuat_pada timestamp
}

Table detail_pengeluaran_barang {
  id varchar [primary key, note: 'UUID']
  id_pengeluaran varchar [ref: > pengeluaran_barang.id]
  id_barang varchar [ref: > barang.id]
  kuantitas decimal
}

// 4. Penyesuaian & Stock Opname
Table penyesuaian_stok {
  id varchar [primary key, note: 'UUID']
  id_barang varchar [ref: > barang.id]
  tanggal_penyesuaian date
  kuantitas_sebelumnya decimal
  kuantitas_baru decimal
  selisih decimal [note: 'Bisa minus atau plus']
  alasan text
  dibuat_oleh varchar [ref: > pengguna.id]
}

Table stok_opname {
  id varchar [primary key, note: 'UUID']
  nomor_referensi varchar [unique]
  tanggal_opname date
  status varchar [note: 'Draft, Selesai']
  dibuat_oleh varchar [ref: > pengguna.id]
  dibuat_pada timestamp
}

Table detail_stok_opname {
  id varchar [primary key, note: 'UUID']
  id_stok_opname varchar [ref: > stok_opname.id]
  id_barang varchar [ref: > barang.id]
  kuantitas_sistem decimal
  kuantitas_fisik decimal
  selisih decimal
  catatan text
}

// 5. Mutasi Barang (Buku Besar / Ledger)
Table mutasi_barang {
  id varchar [primary key, note: 'UUID']
  id_barang varchar [ref: > barang.id]
  jenis_transaksi varchar [note: 'MASUK (GR), KELUAR (GI), SESUAI (Adjustment), OPNAME (Opname)']
  id_referensi varchar [note: 'ID dari GR, GI, Adjustment, atau Opname yang memicu mutasi ini']
  id_dokumen_bc varchar [ref: > dokumen_bc.id, note: 'Boleh kosong, Dokumen BC terkait jika MASUK/KELUAR']
  perubahan_kuantitas decimal [note: '+ untuk masuk, - untuk keluar']
  saldo_akhir decimal [note: 'Saldo akhir barang setelah mutasi ini terjadi (running balance)']
  tanggal_mutasi timestamp
  dibuat_oleh varchar [ref: > pengguna.id]
}
```

## Penjelasan Singkat Struktur 

*   **Tabel Master:** `users` untuk data otentikasi. `goods` untuk pendaftaran/master data barang unik beserta kode barangnya. `inventory` menyimpan nilai mutlak/saldo absolut terbaru stok fisik per barang.
*   **Dokumen (Pabean):** Data **Upload Data BC** masuk ke `customs_documents` (mengandung No. AJU, dll dan menyimpan file CEISA). Sedangkan **Upload Scan Dokumen** fisiknya disimpan log-nya di `scanned_documents` bertaut pada Data BC-nya.
*   **Transaksi Gudang:** Aktivitas pemasukan `good_receipts` dan pengeluaran `good_issues` secara tegas memiliki ikatan (*foreign key*) ke *customs_documents*. Tiap transaksi penerimaan/pengeluaran menyimpan detail banyak barang di dalam relasi tabel *_items* miliknya (`good_receipt_items` & `good_issue_items`).
*   **Penyesuaian (Opname/Adjustment):** Menyediakan mekanisme rekonsiliasi jika perhitungan fisik tidak sesuai buku.
*   **Mutasi (Kartu Stok / Mutasi Barang):** Tabel `item_mutations` dibuat secara spesifik sebagai tabel *history/ledger* terpusat yang mencatat setiap keluar-masuknya barang per transaksi (termasuk *balance* akhir berjalan). Ini sangat ideal untuk mencetak Laporan Mutasi Barang demi pengawasan Audit.
