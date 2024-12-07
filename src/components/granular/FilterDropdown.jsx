import React, { useEffect, useRef, useState } from "react";

/**
 * Dropdown component to display a list of radio options.
 * @param {Array} items - List of items for the filter. Each item has id, name, and optional isDefault properties.
 * @param {Function} onApply - Callback when the "Apply" button is clicked, passes the selected item.
 * @param {Object} position - Object containing top, left, and width for dropdown positioning.
 */
const FilterDropdown = ({ items = [], onApply, onBlur, selected }) => {
	const [selectedItem, setSelectedItem] = useState("");
    const ref = useRef(null);
    useEffect(() => {
		const handleClickOutside = (event) => {
			if (!ref.current?.contains(event.target)) {
				onBlur();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	return (
		<div ref={ref} className="absolute bg-white rounded-xl shadow-lg p-4 w-48 z-50 transition-all duration-300">
			<ul className="flex flex-col gap-2 list-none max-h-20 overflow-y-auto scrollbar">
				{items.map((item, idx) => (
					<li
						className="w-full flex items-center justify-between px-2"
						key={idx}
					>
						<label
							htmlFor={`radio-${item}`}
							className="text-sm font-medium text-gray-900 cursor-pointer"
						>
							{item}
						</label>
						<input
							checked={selected === item}
							id={`radio-${item}`}
							type="radio"
							value={item}
							name="filter-radio"
							onChange={() => setSelectedItem(item)}
							className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-600 focus:ring-2"
						/>
					</li>
				))}
			</ul>
			<button
				className="p-2 mt-2 bg-orange-500 text-white w-full rounded-md hover:bg-orange-600"
				onClick={() =>
					onApply(selectedItem)
				}
			>
				Apply
			</button>
		</div>
	);
};

export default FilterDropdown;
