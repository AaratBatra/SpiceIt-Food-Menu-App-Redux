import axios from "axios";
import { useState, useEffect } from "react";
/*
 * @param disId is the id by which this hook will fetch info about the dish
 * @returns { dish, isLoading }
 */
export function useDishModal(dishId) {
	const [dish, setDish] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!dishId) return; // No fetch call if dishId is falsy
		async function fetchInfo() {
			try {
				setIsLoading(true);
				await new Promise((res) => setTimeout(res, 10000));
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
				setDish(data);
			} catch (error) {
				console.error("error while fetching dish info: ", error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchInfo();
	}, [dishId]);

	return { isLoading, dish };
}
