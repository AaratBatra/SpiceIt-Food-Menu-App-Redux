import React from "react";
import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import { useDishModal } from "../hooks/useDishModal";

// interface DishModalProps {
//   isOpen: boolean
//   onClose: () => void
//   dish: {
//     idMeal: string
//     strMeal: string
//     strCategory: string
//     strArea: string
//     strInstructions: string
//     strMealThumb: string
//     strYoutube: string
//   }
// }
const FoodItemModal = ({ isOpen, onClose, dishId }) => {
	if (!isOpen) return null;
	const { isLoading, dish } = useDishModal(dishId);
	//if (isLoading && !dish) return <LoadingModal onClose={onClose} />
	const { name, category, area, thumbnail, instructions, youtube } = dish || {};
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
			<div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl scrollbar">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
				>
					<XIcon className="w-6 h-6" />
				</button>
				{isLoading ? (
					<div
						role="status"
						className="w-full mt-16 h-[70vh] animate-pulse"
					>
						<div className="w-full h-[70vh] bg-gray-400 rounded-lg"></div>
					</div>
				) : (
					<div className="p-8">
						<h2 className="text-3xl font-bold mb-4 text-orange-600">
							{name}
						</h2>
						<div className="flex flex-col md:flex-row gap-8">
							<div className="md:w-1/2">
								<img
									src={thumbnail}
									alt={name}
									className="w-full h-auto max-h-[300px] rounded-lg shadow-md"
								/>
								<div className="mt-4 flex gap-4">
									<span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
										{category}
									</span>
									<span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
										{area}
									</span>
								</div>
								<h3 className="text-xl font-semibold mb-2 text-orange-600">
									Video Tutorial
								</h3>
								<div className="aspect-w-16 aspect-h-9">
									<iframe
										src={`https://www.youtube.com/embed/${youtube}`}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="w-full h-full rounded-lg shadow-md"
									></iframe>
								</div>
							</div>
							<div className="md:w-1/2">
								<h3 className="text-xl font-semibold mb-2 text-orange-600">
									Instructions
								</h3>
								<p className="text-gray-700 mb-4 text-sm text-justify">
									{instructions}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FoodItemModal;
