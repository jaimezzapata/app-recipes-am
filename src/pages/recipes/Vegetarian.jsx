import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
// import { recipesVegetarian } from "../../data/dataRecipes"
import './Vegetarian.css'
let urlRecipes = 'http://localhost:3000/vegetarians'

const Vegetarian = () => {
  const [stateRecipes, setStateRecipes] = useState([])

  function getRecipes() {
    fetch(urlRecipes)
      .then(response => response.json())
      .then(json => setStateRecipes(json))
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="cards">
      {
        stateRecipes.map((recipeVegetarian) => (
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