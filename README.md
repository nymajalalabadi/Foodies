🍽️ Foodies - Recipe Sharing Platform
A modern, full-stack Next.js application for sharing, discovering, and exploring delicious meals and recipes. Built with TypeScript, SQLite, and Tailwind CSS.

🚀 Features
Core Functionality
Browse Meals: View a collection of curated meals with beautiful images and summaries
Detailed Recipes: Access comprehensive meal details including ingredients, instructions, and creator information
Share Recipes: Add your own favorite recipes to the community
Image Upload: Upload and preview meal images before sharing
Responsive Design: Fully responsive design that works on all devices
Technical Features
Server-Side Rendering: Optimized performance with Next.js 16
TypeScript: Full type safety throughout the application
Server Actions: Modern React server actions for form handling
SQLite Database: Lightweight, file-based database for data persistence
Image Optimization: Next.js Image component for optimized image loading
Form Validation: Client and server-side validation for data integrity
🛠️ Technology Stack
Frontend
Next.js 16.0.0 - React framework with App Router
React 19.2.0 - UI library with latest features
TypeScript 5 - Type-safe JavaScript
Tailwind CSS 4 - Utility-first CSS framework
Backend
Next.js Server Actions - Server-side form handling
SQLite 3 - Lightweight database
better-sqlite3 - Fast SQLite driver for Node.js
Security & Validation
XSS Protection - Input sanitization
Slug Generation - URL-friendly identifiers
Email Validation - Proper email format checking
📁 Project Structure
foodies/
├── app/                    # Next.js App Router
│   ├── components/
│   │   ├── meals/          # Meal-related components
│   │   │   ├── meal-item.tsx
│   │   │   ├── meals-grid.tsx
│   │   │   ├── image-picker.tsx
│   │   │   └── meals-form-submit.tsx
│   │   └── main-header/    # Navigation components
│   ├── meals/              # Meal pages
│   │   ├── [mealSlug]/     # Dynamic meal detail page
│   │   ├── share/          # Share meal form
│   │   └── page.tsx        # Meals listing
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── lib/
│   ├── meals.js            # Database operations
│   └── actions.js          # Server actions
├── assets/                 # Static images
├── public/                 # Public assets
├── meals.db               # SQLite database
├── initdb.js              # Database initialization
└── package.json           # Dependencies
🗄️ Database Schema
The application uses SQLite with a single meals table:

CREATE TABLE meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
);
Sample Data
The application comes pre-loaded with 7 sample meals including:

Juicy Cheese Burger
Spicy Curry
Homemade Dumplings
Classic Mac n Cheese
Authentic Pizza
Wiener Schnitzel
Fresh Tomato Salad
🚀 Getting Started
Prerequisites
Node.js 18+ and npm
Git
Installation
Clone the repository

git clone <repository-url>
cd foodies
Install dependencies

npm install
Initialize the database

node initdb.js
Start the development server

npm run dev
Open your browser

Navigate to http://localhost:3000
Start exploring meals and sharing your own recipes!
📋 Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run start - Start production server
npm run lint - Run ESLint
🔧 Key Components
MealItem Component
Displays individual meal cards with image, title, creator, and "View Details" link.

MealsGrid Component
Renders a responsive grid of meal items.

ImagePicker Component
Custom file input with image preview functionality.

MealsFormSubmit Component
Form submission button with loading states.

Server Actions
shareMeal: Handles meal creation and validation
getMeals: Retrieves all meals from database
getMeal: Retrieves single meal by slug
🌐 Pages & Routes
/ - Homepage with featured meals
/meals - All meals listing
/meals/[slug] - Individual meal details
/meals/share - Share new meal form
🔒 Security Features
Input Sanitization: All user inputs are validated and sanitized
File Upload Validation: Image files are checked for type and size
Email Validation: Proper email format checking
XSS Protection: HTML content is safely rendered
🎨 Styling
The application uses Tailwind CSS for styling with custom CSS modules for component-specific styles. The design is fully responsive and follows modern UI/UX principles.

🔄 Data Flow
Database Initialization: initdb.js populates SQLite with sample data
Server Actions: Handle form submissions and database operations
API Routes: Next.js handles routing and server-side rendering
Client Components: React components manage UI state and interactions
📝 Contributing
Fork the repository
Create a feature branch
Make your changes
Add tests if applicable
Submit a pull request
📄 License
This project is for educational purposes and learning Next.js concepts.
