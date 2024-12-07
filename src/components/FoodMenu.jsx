import React, { useMemo, useState } from "react";
import FoodItemCard from "./FoodItemCard";
import FoodItemModal from "./FoodItemModal";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./granular/Pagination";
import { setCurrentPage } from "../store/slices/FoodMenuSlice";

const FoodMenu = () => {
	const [activeDishId, setActiveDishId] = useState(null);
	const dispatch = useDispatch();
	const { pageMenu, pagination } = useSelector((state) => state.foodMenu);
	const { currentPage, totalPages } = pagination;
	function handlePageChange(page) {
		dispatch(setCurrentPage(page));
	}
	const ratings = useMemo(() => {
        let arr = []
		for (let i = 0; i < pageMenu.length; i++) {
			arr.push(Math.floor(Math.random() * 5) + 1);
		}
        return arr;
	}, [pageMenu]);
	return (
		<div className="w-full">
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			<div className="w-full grid grid-cols-4 gap-4 p-4 max-md:grid-cols-2 max-md:p-1">
				{pageMenu.map((item, index) => {
					return (
						<FoodItemCard
							key={item.idMeal}
							id={item.idMeal}
							setActiveDishId={setActiveDishId}
							openModal={() => setIsModalOpen(true)}
							img={item.strMealThumb}
							name={item.strMeal}
							rating={ratings[index]} // random rating between 1 and 5
						/>
					);
				})}
			</div>
			<FoodItemModal
				isOpen={activeDishId !== null}
				onClose={() => setActiveDishId(null)}
				dishId={activeDishId}
			/>
		</div>
	);
};

export default FoodMenu;
