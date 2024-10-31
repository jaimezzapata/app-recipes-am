import { useState, useEffect } from 'react'
let urlRecipes = 'http://localhost:3000/vegetarians'

const UpdateVegetarian = () => {

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
        <form>
            <input placeholder="Nombre" type="text" />
            <input placeholder="Instrucciones" type="text" />
            <input placeholder="Tiempo preparación" type="text" />
            <input placeholder="Dificultad" type="text" />
            <input placeholder="Ingredientes" type="text" />
            <input placeholder="Tipo" type="text" />
            <input type="button" value="Editar Receta" />
        </form>
    )
}

export default UpdateVegetarian