import {useState} from "react";
import FiltersSection from "../components/FiltersSection";
import FoodMenu from "../components/FoodMenu";
import FoodItemModal from "../components/FoodItemModal";

const HomePage = () => {
	return (
		<main className="py-10 px-20 max-md:px-8">
			<FiltersSection />
			<div className="w-full mt-6">
				<FoodMenu />
			</div>
		</main>
	);
};

export default HomePage;
