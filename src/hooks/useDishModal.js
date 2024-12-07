import axios from "axios";
import { useState, useEffect } from "react";
import { fetchInfo } from "../utils";

/*
 * @param disId is the id by which this hook will fetch info about the dish
 * @returns { dish, isLoading }
 */
// prevent calling the api again if the same dish is already fetched and in the cache
const dishCache = new Map();
function addToCache(dishId, data) {
	if (dishCache.size >= 3) {
		const oldestKey = dishCache.keys().next().value;
		dishCache.delete(oldestKey);
	}
	dishCache.set(dishId, data);
}
export function useDishModal(dishId) {
	const [dish, setDish] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!dishId) return; // No fetch call if dishId is falsy

		// Check if dish is already cached
		if (dishCache.has(dishId)) {
			setDish(dishCache.get(dishId));
			return; // Skip API call if cached
		}

		// Fetch dish info and add to cache
		async function getInfo() {
			setIsLoading(true);
			const data = await fetchInfo(dishId);
			if (data) {
				setDish(data);
				addToCache(dishId, data); // Add to cache
			}
			setIsLoading(false);
		}

		getInfo();
	}, [dishId]);

	return { isLoading, dish };
}
