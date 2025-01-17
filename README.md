# Medicus

Medicus is a healthcare management application that provides a platform for patients and doctors to manage appointments, medications, and perform symptom checks.

## Features

- User Authentication (Login/Register)
- Appointment Management
- Medication Tracking
- Symptom Checker
- Medical Reports Access
- Responsive Dashboard Interface

## Tech Stack

### Frontend
- Next.js 14.0.0
- React 18
- TailwindCSS
- CSS3 for custom animations

### Backend
- Spring Boot 3.1.5
- Java 17
- PostgreSQL
- Maven

## Prerequisites

- Node.js 16+
- Java JDK 17
- PostgreSQL 12+
- Maven
- npm 8+

## Installation

1. Clone the repository:
```bash
git clone https://github.com/anevski-stefan/medicus.git
cd medicus
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Configure your database:
   - Create a PostgreSQL database named `medicus`
   - Update the database credentials in `application-prod.properties` if needed

3. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend API will be available at `http://localhost:9091`

## Project Structure

### Frontend
- `/src/app` - Next.js pages and components
- `/public/styles` - CSS stylesheets
- `/components` - Reusable React components

### Backend
- `/src/main/java/com/example/backend/controller` - REST Controllers
- `/src/main/java/com/example/backend/model` - Entity Models
- `/src/main/java/com/example/backend/service` - Business Logic
- `/src/main/java/com/example/backend/repository` - Data Access Layer
- `/src/main/resources` - Configuration files
- `/src/test` - Test files

## Environment Variables

### Frontend
Create a `.env.local` file in the frontend directory:
```env
# Add your environment variables here
```

### Backend
Configure `application-prod.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/medicus
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## API Endpoints

### Patient Endpoints
- GET /api/patients - Get all patients

### Doctor Endpoints
- GET /api/doctors - Get all doctors

### Appointment Endpoints
- Various endpoints for appointment management

## Production Deployment

### Frontend
```bash
cd frontend
npm run build
```

### Backend
```bash
cd backend
./mvnw clean package
```