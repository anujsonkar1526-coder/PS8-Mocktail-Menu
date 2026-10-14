# PS8: Mocktail Menu

## Project Name
**Mocktail Cafe**

## Problem Statement
Build a cafe drinks menu with a recipe page for each non-alcoholic drink.

## API Used
[TheCocktailDB API](https://www.thecocktaildb.com/api.php)

- **Drinks List:** `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
- **Drink Details:** `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=:id`

## Routes

| Route | Description |
|---|---|
| `/` | Home page with a See Menu button |
| `/drinks` | Displays non-alcoholic drinks and search by name |
| `/drinks/:id` | Shows drink image, glass type, category, ingredients, measurements and instructions |
| `*` | Page not found |

## Technologies Used

- React.js
- React Router DOM
- JavaScript
- CSS
- TheCocktailDB API

## Screenshots

### 1. Home Page
<img width="1470" height="956" alt="Screenshot 2026-10-15 at 12 25 07 AM" src="https://github.com/user-attachments/assets/5085a135-1c6d-49a8-ad50-bcbaf6592eef" />


### 2. Drinks Menu
<img width="1470" height="956" alt="Screenshot 2026-10-15 at 12 35 52 AM" src="https://github.com/user-attachments/assets/92d11c74-f970-4b66-8412-ac7bd01e1cab" />


## Live Link

[Open Mocktail Cafe](ps-8-mocktail-menu.vercel.app)

## How to Run Locally

1. Clone the repository.
2. Open the project folder in the terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the project:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.
