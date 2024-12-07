import { ArrowUpDown, SlidersHorizontal } from "lucide-react";
import React from "react";
import FilterButton from "./granular/FilterButton";
const data = [
    { id: 1, name: "India", isDefault: true },
    { id: 2, name: "Canada" },
    { id: 3, name: "France" },
    { id: 4, name: "China" },
    { id: 5, name: "Iran" },
  ];
const sorts = [
    {
        id: 1, name: "A-Z"
    },
    {
        id: 2, name: "Z-A"
    }
]
const FiltersSection = () => {
    const handleFilterApply = (selectedItem) => {
        console.log('Filter applied with:', selectedItem);
      };
	return (
		<div className="w-full flex flex-col gap-2 rounded-md ring ring-orange-100 ring-offset-1 p-2 bg-white">
			<h1>Restaurants with online food delivery in Pune</h1>
			<nav>
				<ul className="flex gap-2 items-center list-none">
					<li>
						<FilterButton items={data}>
                            Filter <SlidersHorizontal size={16} className="text-xs" />
                        </FilterButton>
					</li>
					<li>
						<FilterButton items={sorts}>
                            Sort <ArrowUpDown size={16} className="text-xs" />
                        </FilterButton>
					</li>
				</ul>
			</nav>
		</div>
	);
};
//
// 
export default FiltersSection;
