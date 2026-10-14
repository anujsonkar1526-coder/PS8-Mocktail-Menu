
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

function DrinkDetails() {




  const { id } = useParams();
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)

      .then((res) => res.json())

      .then((data) => {
        setDrink(data.drinks ? data.drinks[0] : null);
        setLoading(false);
      })

      .catch(() => {
        setLoading(false);
      });

  }, [id]);



  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!drink) {
    return (
      <div>
    <h2>Drink not found</h2>
           <Link to="/drinks">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/drinks">Back to Menu</Link>

      <h2>{drink.strDrink}</h2>
      <img src={drink.strDrinkThumb} width="200" alt={drink.strDrink} />

      <p>Glass: {drink.strGlass}</p>
      <p>Category: {drink.strCategory}</p>

      <h3>Ingredients</h3>

      {
      Array.from({ length: 15 }, (_, i) => {
        const ingredient = drink["strIngredient" + (i + 1)];

        const measure = drink["strMeasure" + (i + 1)];

        if (ingredient) {

          return (
            <p key={i}>{ingredient} - {measure}</p>
          );

        }

        return null;
      })}

      <h3>Instructions</h3>

      <p>{drink.strInstructions}</p>
      
    </div>
  );
}

export default DrinkDetails;
