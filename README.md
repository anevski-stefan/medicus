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
- TailwindCSS 3
- PostCSS 8
- Autoprefixer 10

### Backend
- Spring Boot 3.1.5
- Java 17
- PostgreSQL
- H2 Database (for development)
- Spring Security
- Lombok
- Maven
- Thymeleaf

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
   - Create a PostgreSQL database
   - Update the database credentials in `application.properties` if needed

3. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend API will be available at `http://localhost:8080` (default Spring Boot port)

## Environment Variables

### Frontend
Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Backend
Configure `application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Development

### Frontend
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run linter
```

### Backend
```bash
./mvnw spring-boot:run      # Run development server
./mvnw clean package        # Build for production
./mvnw test                 # Run tests
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.