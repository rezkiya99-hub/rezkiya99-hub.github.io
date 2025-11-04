# Panduan Deploy ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk deploy ke GitHub Pages dengan GitHub Actions.

## Konfigurasi yang Sudah Dibuat

### 1. Vite Config
File `vite.config.ts` sudah dikonfigurasi dengan:
- `base: "/"` - Untuk berjalan di root directory
- `host: "0.0.0.0"` - Untuk akses dari Replit
- `port: 5000` - Port standard untuk webview

### 2. GitHub Actions Workflow
File `.github/workflows/deploy.yml` sudah dibuat untuk:
- Auto-deploy saat push ke branch `main`
- Build dan upload ke GitHub Pages
- Dapat juga dipicu manual via workflow_dispatch

## Cara Mengaktifkan GitHub Pages

1. **Push kode ke GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Aktifkan GitHub Pages di Repository Settings:**
   - Buka repository Anda di GitHub
   - Klik **Settings** > **Pages**
   - Di bawah **Source**, pilih **GitHub Actions**
   - Workflow akan otomatis berjalan dan deploy aplikasi Anda

3. **Akses Website Anda:**
   - Setelah workflow selesai, website Anda akan tersedia di:
   - `https://<username>.github.io/<repository-name>/`
   - Atau custom domain jika sudah dikonfigurasi

## Catatan Penting

- **Base URL**: Saat ini dikonfigurasi untuk root directory (`base: "/"`). Jika repository Anda bukan `<username>.github.io`, ubah `base` di `vite.config.ts` menjadi:
  ```typescript
  base: "/<repository-name>/",
  ```

- **Custom Domain**: Jika menggunakan custom domain, tetap gunakan `base: "/"`

- **Auto Deploy**: Setiap kali Anda push ke branch `main`, aplikasi akan otomatis di-deploy ulang

## Development di Replit

Untuk development lokal di Replit:
```bash
npm run dev
```
Server akan berjalan di port 5000 dan dapat diakses melalui webview Replit.

## Build Manual

Untuk build aplikasi secara manual:
```bash
npm run build
```
Hasil build akan ada di folder `dist/`.
