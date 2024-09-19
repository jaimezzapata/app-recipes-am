import { recipesVegetarian } from "../../data/dataRecipes"

const Vegetarian = () => {
  console.log(recipesVegetarian)
  return (
    <div>
      {
        recipesVegetarian.map((recipeVegetarian) => (
          <div>
            <h3>Nombre: {recipeVegetarian.nombre}</h3>
            <p>Descripción: {recipeVegetarian.descripcion}</p>
            <p>Dificultad: {recipeVegetarian.dificultad}</p>
            <p>Tiempo: {recipeVegetarian.tiempo}</p>
            <img src={recipeVegetarian.img} alt={recipeVegetarian.nombre} />
          </div>
        ))
      }
    </div>
  )
}

export default Vegetarian