import { useState, useRef, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";

const FilterButton = ({ children, items = [] }) => {
	const [expand, setExpand] = useState(false);

	return (
		<div className="relative inline-block">
			<button
				onClick={() => setExpand(!expand)}
				className={`bg-gray-50 py-2 px-2 rounded-full shadow-sm flex items-center gap-2 justify-center text-sm font-semibold hover:bg-gray-100 transition-all duration-200 border border-gray-400`}
			>
				{children}
			</button>
			{expand && (
				<FilterDropdown
					items={items}
                    onBlur={() => setExpand(false)}
					onApply={(selectedItem) => {
						setExpand(false);
						alert(JSON.stringify(selectedItem));
					}}
				/>
			)}
		</div>
	);
};

export default FilterButton;
