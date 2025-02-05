# Visa-Navigator Portal 🛂🌍  

## Overview  
Visa-Navigator Portal is a web-based platform designed to help users navigate visa application processes efficiently. The platform provides up-to-date visa requirements, application guidelines, and eligibility criteria for different countries, streamlining the visa application journey.

## Features  
- ✅ Search for visa requirements based on nationality and destination  
- ✅ Detailed visa application process for various countries  
- ✅ User authentication (Login/Signup)  
- ✅ Save favorite visa requirements for quick access  
- ✅ Admin panel for managing visa information  
- ✅ Responsive UI for seamless experience on all devices  

## Tech Stack  
- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** Firebase Auth  
- **Deployment:** Firebase (Frontend), Vercel (Backend)  

## Installation & Setup  

### 1. Clone the Repository  
```sh
git clone https://github.com/hassankhsalar/Visa-Navigator.git
cd Visa-Navigator

### 2. Install Dependencies
sh
npm install

### 3. Set Up Environment Variables
- Create a .env file in the root directory and add the required environment variables (e.g., API keys, database URL).

### 4. Start the Development Server
sh
npm run dev

| Method | Endpoint        | Description                          |
|--------|----------------|--------------------------------------|
| GET    | `/api/visas`   | Fetch all visa requirements         |
| GET    | `/api/visas/:id` | Get details of a specific visa    |
| POST   | `/api/visas`   | Add a new visa requirement (Admin)  |
| PUT    | `/api/visas/:id` | Update visa information (Admin)  |
| DELETE | `/api/visas/:id` | Remove a visa entry (Admin)     |

