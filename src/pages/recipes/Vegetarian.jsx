import { Link } from "react-router-dom"
// import { recipesVegetarian } from "../../data/dataRecipes"
import './Vegetarian.css'
const Vegetarian = () => {
  console.log(recipesVegetarian)
  return (
    <div>
      {
        recipesVegetarian.map((recipeVegetarian) => (
          <div key={recipeVegetarian.id} className="card">
            <img src={recipeVegetarian.img} alt={recipeVegetarian.nombre} />
            <h3>Nombre: {recipeVegetarian.nombre}</h3>
            <p>Descripción: {recipeVegetarian.descripcion}</p>
            <p>Dificultad: {recipeVegetarian.dificultad}</p>
            <p>Tiempo: {recipeVegetarian.tiempo}</p>
            <section className="botones">
              <Link className="boton">Detalle</Link>
              <Link className="boton">Editar</Link>
              <Link className="boton">Eliminar</Link>
            </section>
          </div>
        ))
      }
    </div>
  )
}

export default Vegetarian