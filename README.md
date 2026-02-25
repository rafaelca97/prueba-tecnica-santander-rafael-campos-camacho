## Talent Manager - Full-Stack Candidate Management System

A professional Full-Stack application designed for the strategic oversight of recruitment pipelines. This system allows recruiters to upload candidate profiles through reactive forms and process technical data contained in Excel files, persisting the information in a MongoDB database.

## 🚀 Technical Requirements Met

 - Frontend: Angular 19+ using Standalone Components architecture.

        - UI/UX: Styled with Angular Material (Data Tables, Tabs, Forms, SnackBars).

        - Forms: Implemented with Reactive Forms for robust data collection and validation.

- Backend: NestJS (Node.js framework) for business logic and file processing.

        - Persistence: MongoDB Atlas integration via Mongoose.

        - File Processing: Server-side Excel parsing (.xlsx) and data merging.

        - Reactive State: Incremental JSON storage on the client-side to optimize network performance.

## 🛠️ Tech Stack

- Frontend

        - Angular 19: Modern standalone architecture.

        - RxJS: Functional and reactive programming for state management.

        - Angular Material: Premium UI components and responsive layouts.

        - XLSX: Local type definitions for Excel structure.

- Backend

        - NestJS: Scalable server-side architecture.

        - Mongoose: NoSQL ODM for MongoDB.

        - XLSX: Buffer-based Excel parsing.

        - Multer: Multi-part file upload handling.

## 💡 Key Architectural Decisions

Reactive Incremental Updates

To comply with the requirement of avoiding full-list retrieval for every action:

The CandidateService uses a BehaviorSubject to maintain the local state.

Upon a successful upload, the server responds with the newly created candidate JSON.

The frontend uses the RxJS tap operator to push this new object into the existing local stream.

This results in an instant UI update without the need for an additional GET request.

Excel Processing Logic

The backend extracts specific metadata from uploaded .xlsx files. The expected structure for the first row of the Excel is:

seniority: (junior | senior)

years: (number)

availability: (boolean)

Modern UI/UX Design

The application features a "Layered Design" with a clean white background and a soft cream-colored content bubble to enhance readability and professional feel.


## 📦 Getting Started

1. Repository Setup

git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd your-project-name


2. Backend Configuration

Navigate to the folder: cd backend

Install dependencies: npm install

Create a .env file in the backend root:

MONGO_URI=mongodb+srv://rafaelcampos:_cluster0@tech-test-rafael-campos.y3rizc1.mongodb.net/?appName=tech-test-rafael-campos


Start the server: npm run start:dev

3. Frontend Configuration

Navigate to the folder: cd frontend

Install dependencies: npm install

Run the application: ng serve --no-ssr

Open your browser at: http://localhost:4200

## 📄 API Endpoints (CRUD)

GET /candidates: Retrieves the current candidate list.

GET /candidates/:id: Retrieves choosing candidate details.

POST /candidates/upload: Processes multipart/form-data (name, surname, file) and saves to DB.

# ✒️ Author

Rafael Campos Camacho - Full-Stack Developer