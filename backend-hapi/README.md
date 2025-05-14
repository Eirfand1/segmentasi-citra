# 📦 Citra Satelit API

API untuk mengelola segmentasi citra satelit menggunakan Hapi.js dan PostgreSQL.

## 🛠 Base URL
```
http://localhost:3000
```

## 📁 Endpoints

### Autentikasi

#### 🔹 POST `/register`
Mendaftarkan pengguna baru ke sistem.

**Body:** `application/x-www-form-urlencoded`
| Parameter | Deskripsi |
|-----------|-----------|
| name      | Nama pengguna |
| email     | Email pengguna |
| password  | Password pengguna |

**Response Success (200):**
```json
{
  "message": "Registrasi Berhasil",
  "user": {
    "id": "uuid",
    "name": "user",
    "email": "name.fandi07@proton.me"
  }
}
```

#### 🔹 POST `/login`
Melakukan autentikasi pengguna.

**Body:** `application/x-www-form-urlencoded`
| Parameter | Deskripsi |
|-----------|-----------|
| email     | Email pengguna |
| password  | Password pengguna |

**Response Success (200):**
```json
{
  "message": "Login Berhasil",
  "data": "jwt_token"
}
```

#### 🔹 GET `/me`
Mendapatkan informasi pengguna yang sedang login.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response Success (200):**
```json
{
  "id": "804b09e5-e98d-41db-a72f-1cff73e3bf4f",
  "name": "Ego Irfandi",
  "email": "name.fandi07@proton.me"
}
```

#### POST `/upload`

**Body:** `form-data`
| Parameter | Deskripsi |
|-----------|-----------|
| file type: file     | file .tif |


**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response Success (201):**
```json 

{
    "status": "success",
    "message": "Sukes Upload File ke Server",
    "filename": "dummy.tif"
}


```
#### GET `/uploads`

Hanya mendapatkan semua data image menurut user yang login <br>

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Reponse Success(200)**
```json
{
    "status": "success",
    "data": [
        {
            "id": "9f40a534-c813-4bc4-ac9e-f9172e3171a6",
            "file_name": "dummy.tif",
            "uploaded_at": "2025-05-13T18:02:58.482Z",
            "url": "/upload/dummy.tif"
        },
        {
            "id": "afb8d9a4-5c0c-4240-bc48-503a5a18476c",
            "file_name": "bodoh.tif",
            "uploaded_at": "2025-05-13T17:47:58.315Z",
            "url": "/upload/bodoh.tif"
        }
    ]
}

```
#### GET upload/namafile.tf

Mendapatkan file static image tif


#### POST `/predict`


**Headers:**
```
Authorization: Bearer <jwt_token>
```
**Body:** `form-data`
| Parameter | Deskripsi |
|-----------|-----------|
| filename     | namafile.tif |



**Response Success (201):**
```json
{
    "status": "success",
    "message": "Prediction complete",
    "predicted_file": "/output/predicted_bodoh.tif"
}

```

#### GET /output/filehasil

Dapat file static

### Citra Satelit (Coming Soon)
- Upload citra satelit
- Load file GeoTiff
- Proses segmentasi
- Simpan hasil di server

## ⚠️ Format Error
```json
{
  "success": false,
  "message": "Deskripsi error"
}
```

## 📌 Status Pengembangan
- [x] Register
- [x] Login
- [x] Get user info
- [x] Upload citra satelit
- [x] route /predict buat prediksi
- [ ] Load file GeoTiff
- [ ] Simpan hasil di server
- [ ] Handle prediksi model segmentasi
- [ ] Validasi data dengan Joi
- [ ] Konfigurasi keamanan dengan .env
