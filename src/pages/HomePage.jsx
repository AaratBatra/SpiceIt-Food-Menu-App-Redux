import { useEffect, useState } from "react";
import FiltersSection from "../components/FiltersSection";
import FoodMenu from "../components/FoodMenu";
import FoodItemModal from "../components/FoodItemModal";
import { useDispatch } from "react-redux";
import { fetchAreas, fetchFoodByArea } from "../store/slices/FoodMenuSlice";

const HomePage = () => {
	const dispatch = useDispatch();
    // initialize state
	useEffect(() => {
		dispatch(fetchAreas());
		dispatch(fetchFoodByArea("Indian"));
	}, [dispatch]);
	return (
		<main className="relative py-10 px-20 max-md:px-2">
			<FiltersSection />
			<div className="w-full mt-6">
				<FoodMenu />
			</div>
		</main>
	);
};

export default HomePage;
