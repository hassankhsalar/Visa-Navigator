
## Screenshots

![App Screenshot](https://i.ibb.co.com/tTPpcgPX/VNB.png)
![App Screenshot](https://i.ibb.co.com/gN8LR6p/VNH.png)



# Frontend - Visa-Navigator

This is the client-side application for the Visa Portal project. It provides a user-friendly interface for managing visa applications, viewing visa details, and submitting user information. The application is built using React and integrates with a backend server for data management.

---
## Features

- Home Page: Displays the latest visas with a brief introduction.
Includes a banner and interactive sections like FAQs.

- Visa Management: View all visas or specific visa details.
Submit applications directly from the client side.

- User-Specific Features: Personalized data fetching based on logged-in users.

- Responsive design for desktop and mobile views.


## Tech Stack
- React       : Frontend library for building the user interface. 
- React Router: For client-side routing.
- Axios       : API calls
- Tailwind CSS: For styling and responsiveness.
- DaisyUI     : Component Library

---

## Live Link
- https://boi-chai-3669a.web.app/
## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hassankhsalar/Visa-Navigator.git
   cd client

## Project Structure
- # Visa Management API

## Endpoints

### Visa Management

#### GET /visa
Fetch all visas, sorted by creation date (latest first).

#### GET /visa/:id
Fetch a single visa by its ID.  
**Params:**
- `id` (ObjectId of the visa)

#### POST /visa
Add a new visa.  
**Body:**
- Visa details in JSON format.

#### PUT /visa/:id
Update a visa by its ID.  
**Params:**
- `id` (ObjectId of the visa)  
**Body:**
- Fields to update in JSON format.

#### DELETE /visa/:id
Delete a visa by its ID.  
**Params:**
- `id` (ObjectId of the visa)

### User Management

#### GET /users/:email
Fetch user data by their email.  
**Params:**
- `email` (User's email address)

#### POST /users
Add a new user.  
**Body:**
- User details in JSON format.

### Applications Management

#### GET /applications
Fetch all applications or filter by user email.  
**Query:**
- `email` (Optional: filter applications by email)

#### POST /applications
Submit a new application.  
**Body:**
- Application details in JSON format.

#### DELETE /applications/:id
Delete an application by its ID.  
**Params:**
- `id` (ObjectId of the application)

### User-Specific Data

#### GET /my-visas
Fetch visas by the logged-in user's email.  
**Query:**
- `email` (User's email address)



---
