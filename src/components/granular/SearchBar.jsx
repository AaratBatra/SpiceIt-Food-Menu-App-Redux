import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
	return (
		<div className="w-[400px] p-3 bg-gray-200 flex items-center justify-between gap-2 rounded-md shadow-md max-md:w-[300px] max-md:p-2">
			<input
				className="bg-transparent text-gray-600 text-base font-semibold focus-visible:border-none border-none focus-visible:outline-none placeholder:text-gray-500 placeholder:font-normal placeholder:text-base"
				type="text"
				placeholder="Search for awesome dishes"
			/>
            <SearchIcon className="text-gray-500" />
		</div>
	);
};

export default SearchBar;
