import React, { useState } from "react";
import FoodItemCard from "./FoodItemCard";
import FoodItemModal from "./FoodItemModal";
import { useSelector } from "react-redux";

const FoodMenu = () => {
	const [activeDishId, setActiveDishId] = useState(null);
	const { menu } = useSelector((state) => state.foodMenu);

	return (
		<>
			<div className="w-full grid grid-cols-4 gap-4 p-4">
                {menu.map((item)=> {
                    return (
                        <FoodItemCard
                            key={item.idMeal}
                            id={item.idMeal}
                            setActiveDishId={setActiveDishId}
                            openModal={() => setIsModalOpen(true)}
                            img={item.strMealThumb}
                            name={item.strMeal}
                            rating={Math.floor(Math.random() * 5) + 1} // random rating between 1 and 5
                        />
                    )
                })}
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
