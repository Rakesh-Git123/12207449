# 🔗 URL Shortener Microservice with Logging

A lightweight and robust microservice built with **Node.js + Express + MongoDB** that allows users to generate and manage shortened URLs. Integrated with a custom **logging middleware** that sends logs to a protected test server as per AffordMed evaluation requirements.

---

## 📸 Screenshots

### 🌐 Home - Postman Testing `/shorturls`
<img width="1919" height="1079" alt="Screenshot 2025-07-14 114205" src="https://github.com/user-attachments/assets/d8779e1f-0ee1-431f-89e6-3969a00700fb" />


### 📊 GET Stats `/shorturls/:shortcode`
<img width="1919" height="1079" alt="Screenshot 2025-07-14 114213" src="https://github.com/user-attachments/assets/67ceffe3-9ee6-4ad3-bd2c-a5ca3998eff8" />

---

## 🚀 Features

- 🔐 Protected Logging Middleware (no `console.log`)
- 🧠 Smart shortcode generator (`nanoid`)
- ⏳ Auto expiry (default: 30 mins)
- ✅ Custom shortcodes
- 🔁 Redirection support
- 📊 Stats for each short URL
- 🌍 Tracks location, referrer & timestamp of each click

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Unique IDs**: `nanoid`
- **Logging**: Axios to external API
  

---
