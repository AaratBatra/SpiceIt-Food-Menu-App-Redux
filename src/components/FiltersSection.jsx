import {
	ArrowDownAZ,
	ArrowDownZA,
	ArrowUpDown,
	SlidersHorizontal,
	TreePalm,
} from "lucide-react";
import React from "react";
import FilterButton from "./granular/FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodByArea, setSortOption } from "../store/slices/FoodMenuSlice";

const sorts = ["A-Z", "Z-A"];
const FiltersSection = () => {
	const { areas } = useSelector((state) => state.foodMenu);
	const dispatch = useDispatch();
	const { selectedArea, sortOption } = useSelector((state) => state.foodMenu);
	return (
		<div className="w-full flex flex-col gap-2 rounded-md ring ring-orange-100 ring-offset-1 p-2 bg-white">
			<h1>
				Spice It Right – Filter Your Cravings, Sort Your Feast! 🍛🍕🍔
			</h1>
			<nav>
				<ul className="flex gap-2 items-center list-none">
					<li>
						<FilterButton
							items={areas}
							onApply={(area) => dispatch(fetchFoodByArea(area))}
							selected={selectedArea}
						>
							Filter{" "}
							<SlidersHorizontal size={16} className="text-xs" />
						</FilterButton>
					</li>
					<li>
						<FilterButton
							items={sorts}
							onApply={(sortOption) =>
								dispatch(setSortOption(sortOption))
							}
							selected={sortOption}
						>
							Sort <ArrowUpDown size={16} className="text-xs" />
						</FilterButton>
					</li>
					<li>
						<span className="bg-orange-50 py-2 px-2 rounded-full shadow-sm flex items-center gap-2 justify-center text-sm font-semibold hover:bg-orange-100 transition-all duration-200 border border-orange-400 text-orange-600">
							{selectedArea}{" "}
							<TreePalm size={16} className="text-xs" />
						</span>
					</li>
					<li>
						<span className="bg-orange-50 py-2 px-2 rounded-full shadow-sm flex items-center gap-2 justify-center text-sm font-semibold hover:bg-orange-100 transition-all duration-200 border border-orange-400 text-orange-600">
							{sortOption}{" "}
							{sortOption == "A-Z" ? (
								<ArrowDownAZ size={16} className="text-xs" />
							) : (
								<ArrowDownZA
									size={16}
									className="text-xs rotate-180"
								/>
							)}
						</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default FiltersSection;
