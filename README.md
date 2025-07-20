<h1 align="center">📱 Complaint Application</h1>

<p align="center">
  <strong>A simple, role-based mobile application built with React Native</strong>
</p>

<p align="center">
  Raise issues • Track requests • Manage complaint workflows
</p>

---

## 🧭 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🖼️ Screenshots](#️-screenshots)
- [🚀 Getting Started](#-getting-started)
- [📧 Contact](#-contact)
- [📄 License](#-license)

---

## ✨ Features

<table>
  <tr>
    <td>📤</td>
    <td><strong>Driver Role</strong><br/>Submit complaints with issue type, description, and optional image</td>
  </tr>
  <tr>
    <td>🗂️</td>
    <td><strong>Supervisor Role</strong><br/>View all complaints, filter by status (Pending, Approved, Deleted)</td>
  </tr>
  <tr>
    <td>✅</td>
    <td><strong>Approve Requests</strong><br/>Supervisors can mark issues as approved or resolved</td>
  </tr>
  <tr>
    <td>❌</td>
    <td><strong>Delete Requests</strong><br/>Remove invalid or resolved complaints from the system</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><strong>Simple UI</strong><br/>Clean and intuitive mobile interface with separate navigation for each role</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

- **Frontend:** React Native (JavaScript / TypeScript)
- **Navigation:** React Navigation
- **State Management:** useState, useEffect
- **Image Handling:** React Native Image Picker
- **Note:** Currently no backend/API – local state-driven only

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js and npm
- React Native CLI / Expo CLI
- Android Studio or physical device

### 📱 App Setup

```bash
# Clone the repository
git clone https://github.com/your-username/complaint-app.git
cd complaint-app

# Install dependencies
npm install
# or
yarn install

# Start the development server (for Expo)
npx expo start

# Run on Android (React Native CLI)
npx react-native run-android
