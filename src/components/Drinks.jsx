
import { useState, useEffect } from "react";
import { Link } from "react-router";

function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {


    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDrinks(data.drinks || []);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div  className="drink-grid">
      <h2>Our Drinks Menu</h2>

      <input type="text"  placeholder="Search drink"  value={search} onChange={(e) => setSearch(e.target.value)}/>

      {
        drinks.filter((drink) =>
          drink.strDrink.toLowerCase().includes(search.toLowerCase())
        )

        .map((drink) => (
            
          <div  className="drink-card" key={drink.idDrink}>
              
              <img src={drink.strDrinkThumb} width="150" alt={drink.strDrink} />

            <h3>{drink.strDrink}</h3>

            <Link to={"/drinks/" + drink.idDrink}>View Recipe</Link>

          </div>
        ))}
    </div>
  );
}

export default Drinks;
