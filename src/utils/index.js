import axios from "axios";

export async function fetchInfo(dishId) {
    try {
        //await new Promise((res) => setTimeout(res, 10000)); // for testing
        const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishId}`
        );
        const meal = res.data.meals[0];
        const data = {
            idMeal: meal.idMeal,
            name: meal.strMeal,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            thumbnail: meal.strMealThumb,
            youtube: meal.strYoutube.split("v=")[1],
        };
        return data;
    } catch (error) {
        console.error("error while fetching dish info: ", error);
        return null;
    }
}