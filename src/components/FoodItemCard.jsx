import React from "react";
import Rating from "./granular/Rating";

const FoodItemCard = ({ id, setActiveDishId, img, name, rating }) => {
	return (
		<div onClick={() => setActiveDishId(id)} className="flex flex-col gap-2 hover:scale-[0.95] transition-all duration-300 cursor-pointer">
			<img
				className="w-[260px] max-h-[200px] object-cover rounded-xl shadow-md"
				src={img}
				alt={name}
			/>
			<div>
				<h1 className="text-base font-semibold text-pretty">{name}</h1>
				<Rating rate={rating} />
			</div>
		</div>
	);
};

export default FoodItemCard;
