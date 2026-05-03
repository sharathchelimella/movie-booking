🎬 Movie Ticket Booking System

A full-stack MERN web application that allows users to browse movies, select time slots, choose seats, and book tickets online — with real-time booking updates.

Show Image
Show Image
Show Image
Show Image
Show Image
Show Image

🌐 Live Demo

🚀 Deployed at: movie-booking-delta-self.vercel.app


📌 Table of Contents

About the Project
Features
Tech Stack
Architecture Overview
Project Structure
API Endpoints
Installation & Setup
Environment Variables
How to Use
Screenshots
Future Improvements
Author
License


🧠 About the Project
The Movie Ticket Booking System is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides users with a seamless experience to browse available movies, pick a time slot, select seats, and confirm their booking — all in one place.
The backend exposes a RESTful API for booking management, and the frontend is a fast, responsive React application deployed on Vercel.

✨ Features

🎥 Movie Listings — Browse a list of currently available movies
🕐 Time Slot Selection — Choose from multiple available showtime slots
💺 Seat Selection — Interactive seat map to pick preferred seats
✅ Booking Confirmation — Instant confirmation upon successful booking
📋 Last Booking Display — View the most recently placed booking details
🗃️ MongoDB Persistence — All booking data stored in a MongoDB database
📱 Responsive UI — Works seamlessly across desktop and mobile devices


🛠️ Tech Stack
Frontend
TechnologyPurposeReact.jsUI frameworkReact Router DOMClient-side page routingAxiosHTTP requests to backend APICSS / Tailwind CSSStyling and responsive layout
Backend
TechnologyPurposeNode.jsJavaScript server runtimeExpress.jsRESTful API frameworkMongooseMongoDB object modeling (ODM)CORSCross-origin request handlingdotenvManage environment variables
Database
TechnologyPurposeMongoDBNoSQL database for bookingsMongoDB AtlasCloud-hosted MongoDB cluster
Deployment
ServicePurposeVercelFrontend deploymentRender / RailwayBackend deploymentMongoDB AtlasCloud database

🏗️ Architecture Overview
┌─────────────────────────────────────────┐
│           User Browser                  │
│        React.js Frontend                │
│    (Vercel — movie-booking.vercel.app)  │
└──────────────────┬──────────────────────┘
                   │ HTTP / Axios
                   ▼
┌─────────────────────────────────────────┐
│       Node.js + Express.js Backend      │
│         REST API (Port 5000)            │
│   POST /api/booking  |  GET /api/booking│
└──────────────────┬──────────────────────┘
                   │ Mongoose
                   ▼
┌─────────────────────────────────────────┐
│           MongoDB Atlas                 │
│    Collections: bookings                │
└─────────────────────────────────────────┘

📁 Project Structure
movie-booking/
│
├── frontend/                        # React.js Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieList.jsx        # Displays available movies
│   │   │   ├── SlotSelector.jsx     # Time slot selection
│   │   │   ├── SeatSelector.jsx     # Interactive seat map
│   │   │   └── BookingDetails.jsx   # Shows last booking info
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Main booking page
│   │   │   └── Confirmation.jsx     # Booking confirmation page
│   │   ├── App.jsx                  # Root component with routing
│   │   ├── index.js                 # React entry point
│   │   └── data.jsx                 # Movie list, slots, seat layout data
│   ├── package.json
│   └── .env
│
├── backend/                         # Node.js + Express Backend
│   ├── models/
│   │   └── Booking.js               # Mongoose booking schema
│   ├── routes/
│   │   └── bookingRoutes.js         # Express route definitions
│   ├── server.js                    # Express app entry point
│   ├── package.json
│   └── .env
│
└── README.md

🔌 API Endpoints
Base URL: http://localhost:5000/api
MethodEndpointDescriptionRequest BodyPOST/bookingCreate a new movie booking{ movie, slot, seats }GET/bookingRetrieve the last booking made—
Example — POST /api/booking
Request:
json{
  "movie": "Interstellar",
  "slot": "7:00 PM",
  "seats": {
    "A1": 2,
    "B3": 1
  }
}
Response:
json{
  "message": "Booking successful!",
  "data": {
    "_id": "64abc123...",
    "movie": "Interstellar",
    "slot": "7:00 PM",
    "seats": {
      "A1": 2,
      "B3": 1
    }
  }
}
Example — GET /api/booking
Response:
json{
  "data": {
    "_id": "64abc123...",
    "movie": "Interstellar",
    "slot": "7:00 PM",
    "seats": {
      "A1": 2,
      "B3": 1
    }
  }
}

⚙️ Installation & Setup
Prerequisites
Ensure the following are installed on your machine:

Node.js v16+
npm
MongoDB local instance or a MongoDB Atlas account
Git


Step 1 — Clone the Repository
bashgit clone https://github.com/sharathchelimella/movie-booking.git
cd movie-booking

Step 2 — Set Up the Backend
bashcd backend

# Install dependencies
npm install

# Create environment file
touch .env
# Add your variables (see Environment Variables section)

# Start the backend server
npm start

✅ Backend runs at http://localhost:5000


Step 3 — Set Up the Frontend
bashcd ../frontend

# Install dependencies
npm install

# Create environment file
touch .env
# Add your variables (see Environment Variables section)

# Start the React development server
npm start

✅ Frontend runs at http://localhost:3000


🔐 Environment Variables
backend/.env
envPORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/movie-booking
NODE_ENV=development
frontend/.env
envREACT_APP_API_BASE_URL=http://localhost:5000/api

⚠️ Never commit .env files to version control. They are listed in .gitignore.


🖥️ How to Use

Open the app at http://localhost:3000 (or the live URL)
Select a Movie from the available list on the homepage
Choose a Time Slot for your preferred showtime
Pick Your Seats using the interactive seat map
Click "Book Now" to confirm your booking
Your booking confirmation and details are displayed instantly
The last booking section always reflects the most recent reservation


📸 Screenshots
PageDescription🏠 HomeMovie selection, slot picker, and seat map✅ ConfirmationBooking details after successful reservation📋 Last BookingShows the most recently stored booking from MongoDB

Add screenshots to a /screenshots folder and reference them here with ![Home](./screenshots/home.png)


🚀 Future Improvements

 User authentication (register / login with JWT)
 Multiple theater & screen support
 Payment gateway integration (Razorpay / Stripe)
 Booking history page per user
 Email confirmation after booking
 Admin panel to manage movies and showtimes
 Real-time seat availability with Socket.io
 Mobile app version (React Native)


👤 Author
Sharath Chelimella

GitHub: @sharathchelimella
Live App: movie-booking-delta-self.vercel.app


🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add your feature')
Push to your branch (git push origin feature/your-feature)
Open a Pull Request


📄 License
This project is open-source and available under the MIT License.
