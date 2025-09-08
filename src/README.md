🗳️ Polling App

A simple Node.js and Express-based polling API that allows users to create polls, cast votes, and retrieve poll results. The app uses an in-memory data store for simplicity, making it lightweight and easy to run locally.

🚀 Features

Create a new poll with a question and options

Cast votes on available poll options

Retrieve a list of all polls

Retrieve a single poll by ID

In-memory data persistence (no external database required)

Comprehensive test coverage with Jest

🛠️ Tech Stack

Node.js – Runtime environment

Express.js – Web framework

Jest – Testing framework

Supertest – For integration testing

📂 Project Structure
polling-app/
├── src/
│   ├── controllers/
│   │   └── pollController.js   # Handles request/response logic
│   ├── models/
│   │   └── pollModel.js        # In-memory data and core functions
│   ├── routes/
│   │   └── pollsRoutes.js      # Defines API endpoints
│   └── app.js                  # Main app setup
├── src/tests/
│   ├── units/                  # Unit tests
│   │   └── castVote.test.js
│   └── integration/            # Integration tests
│       └── pollsRoute.test.js
├── package.json
└── README.md

⚙️ Installation & Setup

Clone the repo

git clone https://github.com/Jahsbaby/polling-app.git
cd polling-app


Install dependencies

npm install


Run the development server

npm start


Run tests

npm test

📡 API Endpoints
➕ Create a Poll

POST /polls
Request Body:

{
  "question": "Do you like AI?",
  "options": { "yes": 0, "no": 0 }
}


Response:

{
  "id": 2,
  "question": "Do you like AI?",
  "options": { "yes": 0, "no": 0 }
}

🗳️ Cast a Vote

POST /polls/:id/vote
Request Body:

{ "option": "yes" }


Response:

{
  "message": "Vote recorded",
  "poll": {
    "id": 1,
    "question": "Do you like AI?",
    "options": { "yes": 1, "no": 0 }
  }
}

📋 Get All Polls

GET /polls

Response:

[
  {
    "id": 1,
    "question": "Do you like AI?",
    "options": { "yes": 1, "no": 0 }
  }
]

🔎 Get a Poll by ID

GET /polls/:id

Response:

{
  "id": 1,
  "question": "Do you like AI?",
  "options": { "yes": 1, "no": 0 }
}

🧪 Testing

The project includes:

Unit Tests – Validating functions like castVote.

Integration Tests – Ensuring API endpoints work as expected.

To run tests:

npm test

🤝 How to Contribute

Contributions are welcome! To contribute:

Fork the repository

Create a new branch (git checkout -b feature-name)

Make your changes and commit (git commit -m "Add new feature")

Push to your branch (git push origin feature-name)

Open a Pull Request

Please ensure your code follows best practices and passes all tests before submitting.