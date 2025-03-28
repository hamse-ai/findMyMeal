const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');



const app = express();  
app.use(express.static('public'));


dotenv.config();  // Load environment variables from .env

const port = 3000;

const apiKey = process.env.SPOONACULAR_API_KEY; // Load API key from .env file

// Endpoint to fetch recipes based on ingredients
app.get('/api/recipes', async (req, res) => {
  const ingredients = req.query.ingredients;

  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
      params: {
        ingredients: ingredients,
        number: 5,
        apiKey: apiKey,
      },
    });

    res.json(response.data);  // Send the data back to the frontend
  } catch (error) {
    res.status(500).send('Error fetching recipes');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
