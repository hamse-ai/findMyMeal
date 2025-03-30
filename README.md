# Meal Recipe Finder Application

This web application allows users to find meal recipes based on ingredients they have. The app uses the Spoonacular API to fetch recipes and display them in a user-friendly interface.

## Features

- Search for meal recipes based on a list of ingredients.
- View the recipe title, image, and a link to the full recipe.
- Clean and responsive UI for easy interaction.

## Demo

- A demo of the app can be found at https://youtu.be/jQj6-z3GF_w

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Run the Application Locally](#run-the-application-locally)
- [Environment Variables](#environment-variables)
- [Credits](#credits)
- [License](#license)

## Installation

To get started with the app locally, follow the steps below.

### Prerequisites
- **Node.js** and **npm** must be installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

### Steps to Install

1. **Clone the Repository**:

   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/hamse-ai/findMyMeal.git



2. **navigate to the project directory**
```bash
cd findMyMeal
```


3. **Install the dependencies**
Install the necessary dependencies using npm:

```bash 
npm install
```



4. **Run the Application Locally**
To run the application locally, follow these steps:

Create a .env file:

In the root of the project directory, create a .env file (this file will not be committed to Git, ensuring that your API keys are safe).

Add your Spoonacular API key to this file:

.env file --------------------------------

SPOONACULAR_API_KEY=your-api-key-here
--------------------------------    

Replace your-api-key-here with the actual API key you received from Spoonacular.

Start the Server:

To start the Node.js backend server, run the following command:

```bash
node server.js
```
This will start the server locally on port 3000.

Open the Application:

Open your browser and navigate to:

```bash 
http://localhost:3000
```
The application should now be up and running on your local machine.

Environment Variables
For security reasons, we store sensitive information (like API keys) in environment variables. The .env file is loaded using the dotenv package.

SPOONACULAR_API_KEY: Your Spoonacular API key, which you can get from Spoonacular API.

Make sure to add your SPOONACULAR_API_KEY to the .env file before running the app.

Credits
This application uses the following open-source libraries and APIs:

Spoonacular API – Provides meal recipes and ingredient data.

Node.js – JavaScript runtime for building the backend server.

Express – Web framework for Node.js used to build the server.

Axios – Promise-based HTTP client for making API requests.

chatgpt for documenting, finetuning, and troubleshooting

License
This project is licensed under the MIT License - see the LICENSE file for details.

**Notes:**
API Key Security: The Spoonacular API key should not be exposed in the frontend (browser) code. Use a backend server (like Node.js) to handle API requests securely.

Error Handling: If the API is down or an invalid response is received, the app will show a fallback error message to the user.
