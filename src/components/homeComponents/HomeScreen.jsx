import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react';
import AdBanner from './AdBanner'
import RecipeContainer from './RecipeContainer';


const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
  const url = 'https://recipes.devmountain.com'

  const getRecipes = () => {
    axios
      .get(`${url}/recipes`)
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  }, [])


  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes}/>
    </div>
  )
}

export default HomeScreen