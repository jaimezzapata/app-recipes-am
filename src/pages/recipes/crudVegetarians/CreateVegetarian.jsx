import { useState } from 'react'
let urlRecipes = 'http://localhost:3000/vegetarians'

const CreateVegetarian = () => {

    const [stateRecipes, setStateRecipes] = useState([])

    function getRecipes() {
        fetch(urlRecipes)
            .then(response => response.json())
            .then(json => setStateRecipes(json))
    }

    return (
        <form>
            <input placeholder="Nombre" type="text" />
            <input placeholder="Instrucciones" type="text" />
            <input placeholder="Tiempo preparación" type="text" />
            <input placeholder="Dificultad" type="text" />
            <input placeholder="Ingredientes" type="text" />
            <input placeholder="Tipo" type="text" />
            <input type="button" value='Crear Receta' />
        </form>
    )
}

export default CreateVegetarian