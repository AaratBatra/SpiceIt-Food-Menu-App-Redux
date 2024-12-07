import React, { useState } from "react";
import FoodItemCard from "./FoodItemCard";
import FoodItemModal from "./FoodItemModal";

const FoodMenu = () => {
	const [activeDishId, setActiveDishId] = useState(null);
	return (
		<>
			<div className="w-full grid grid-cols-4 gap-4 p-4">
				<FoodItemCard
					id={52772}
                    setActiveDishId={setActiveDishId}
                    openModal={() => setIsModalOpen(true)}
					img={
						"https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg"
					}
					name="Al Fungi Pizza"
					rating={4}
				/>
			</div>
			<FoodItemModal
				isOpen={activeDishId !== null}
				onClose={() => setActiveDishId(null)}
				dishId={activeDishId}
			/>
		</>
	);
};

export default FoodMenu;
