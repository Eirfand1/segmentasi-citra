# 📦 Citra Satelit API (Hapi.js + PostgreSQL)

API ini digunakan untuk mengelola segmentasi citra satelit

---

## 🛠 Base URL
```
http://localhost:3000
```

---

## 📁 Endpoints User

**Body:** `application/x-www-form-urlencoded`

### 🔹 POST `/register`
Ambil semua data produk.

**Response:**
```json
	{
  "message": "Registrasi Berhasil",
  "user": [
    {
      "id": "uuid",
      "name": "useri",
      "email": "name.fandi07@proton.me",
      
    }
  ]
}
```

### 🔹 POST `/login`
Tambah data produk baru.

**Body:** `application/x-www-form-urlencoded`
```

**Sertakan Header** <br>

Authorization: Bearer <jwt token> <br>

|email    | email@user |
|password | password   |


```

**Response:**
```json
{
  "message": "Login Berhasil",
  "data": "jwt token"
}
```

### 🔹 GET `/me

header = Authorization: Bearer <jwt> <br>

**Response**
```json

{
    "id": "804b09e5-e98d-41db-a72f-1cff73e3bf4f",
    "name": "Ego Irfandi",
    "email": "name.fandi07@proton.me"
}

```
---

## ⚠️ Error Format
```json
{
  "success": false,
  "message": "Deskripsi error"
}
```

---

## 📌 Todo
- [x] register
- [x] login
- [ ] upload citra satelit
- [ ] load file GeoTiff
- [ ] simpan hasil di server
- [ ] handle prediksi model segmentasi
- [ ] Validasi dasar dilakukan manual tanpa Joi
- [ ] File .env buat security(males bet anj)


