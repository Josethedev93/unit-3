import React from "react";
import styles from './Recipe.module.css'
import {  useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipes/${recipe.recipe_id}`);
    }
    return (
        <div className={styles.recipe_card}>
            <div>
                <div className={styles.recipe_img_container}>
                    <img src={recipe.image_url} alt="recipeimage" />
                </div>
                <h3>{recipe.recipe_name}</h3>
            </div>
            <button onClick={handleClick}>See More</button>
        </div>
    )
};

export default RecipeCard;