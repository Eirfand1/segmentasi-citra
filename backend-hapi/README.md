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

#### POST `/Upload`

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
- [ ] Load file GeoTiff
- [ ] Simpan hasil di server
- [ ] Handle prediksi model segmentasi
- [ ] Validasi data dengan Joi
- [ ] Konfigurasi keamanan dengan .env
