import { ArrowUpDown, SlidersHorizontal } from "lucide-react";
import React from "react";
import FilterButton from "./granular/FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodByArea, setSortOption } from "../store/slices/FoodMenuSlice";

const sorts = ['A-Z', 'Z-A'];
const FiltersSection = () => {
    const {areas} = useSelector(state => state.foodMenu);
    const dispatch = useDispatch();
	return (
		<div className="w-full flex flex-col gap-2 rounded-md ring ring-orange-100 ring-offset-1 p-2 bg-white">
			<h1>Spice It Right – Filter Your Cravings, Sort Your Feast! 🍛🍕🍔</h1>
			<nav>
				<ul className="flex gap-2 items-center list-none">
					<li>
						<FilterButton items={areas} onApply={(area) => dispatch(fetchFoodByArea(area))} >
                            Filter <SlidersHorizontal size={16} className="text-xs" />
                        </FilterButton>
					</li>
					<li>
						<FilterButton items={sorts} onApply={(sortOption) => dispatch(setSortOption(sortOption))} >
                            Sort <ArrowUpDown size={16} className="text-xs" />
                        </FilterButton>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default FiltersSection;