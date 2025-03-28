document.getElementById('search-recipes').addEventListener('click', async function() {
    const ingredients = document.getElementById('ingredients').value;
    const url = `/api/recipes?ingredients=${ingredients}`;  // Request to the backend server
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (Array.isArray(data)) {
        if (data.length === 0) {
          document.getElementById('recipe-list').innerHTML = `<p>No recipes found with those ingredients.</p>`;
          return;
        }
  
        let recipeHTML = '';
        data.forEach(recipe => {
          recipeHTML += `
            <div class="recipe-item">
              <h3>${recipe.title}</h3>
              <img src="${recipe.image}" alt="${recipe.title}" />
              <p><a href="https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}" target="_blank">View Recipe</a></p>
            </div>
          `;
        });
  
        document.getElementById('recipe-list').innerHTML = recipeHTML;
      } else {
        document.getElementById('recipe-list').innerHTML = `<p>Error fetching recipes. Please try again later.</p>`;
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      document.getElementById('recipe-list').innerHTML = `<p>Error fetching recipes. Please try again later.</p>`;
    }
  });
  