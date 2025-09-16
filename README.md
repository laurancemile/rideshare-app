# 🚖 After-Hours Ride Sharing App (MERN)

A simplified **MERN stack ride-sharing app** for after-hours club transportation.  
Built with **MongoDB, Express.js, React, and Node.js**, this app supports **riders** requesting rides and an **admin (driver)** managing requests.

---

## ✨ Features (MVP)

### Rider

- Sign up / log in
- Request a ride (pickup & dropoff locations, instant price estimate)
- View ride history
- Manage profile & settings
- Access help/FAQ page

### Admin (Driver)

- View incoming ride requests in real-time
- Accept or decline requests
- View/manage all rides (history, status updates)

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, React Query, React Hot Toast
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Styling:** Styled Components
- **Notifications:** React Hot Toast
- **Dev Tools:** React Query Devtools

---

## 📂 Project Structure

/client
/src
/components # Reusable UI components
/pages # Page-level components (auth, rider, admin)
/services # API calls (auth, rides, users)
/routes # Central route config
App.jsx
index.js

/server
/src
/connect # Connect mongoDB
server.js

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/rideshare-app.git
cd rideshare-app
```

### 2. Setup Backend
2.1
```bash
cd server
npm install
```

2.2 Create a .env file with:
```bash
PORT=5000
ATLAS_URI=your-mongodb-uri
```

2.3 Start the server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd client
npm install
npm start
```

Frontend runs on http://localhost:5173
Backend runs on http://localhost:5000

### 4 🗄 Database Collections
User:
```bash
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String, // hashed
  phone: String,
  role: "rider" | "admin",
  createdAt: Date,
  updatedAt: Date
}
```

Rides:
```bash
{
  _id: ObjectId,
  riderId: ObjectId,
  driverId: ObjectId,
  pickupLocation: String,
  dropoffLocation: String,
  price: Number,
  status: "pending" | "accepted" | "declined" | "completed",
  createdAt: Date,
  updatedAt: Date
}
```
### 5 Author
Built with ❤️ while learning the MERN stack by Lawrence Mile 😎