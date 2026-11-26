import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/router";
import { useState } from "react";

// type SearchData = {
// 	query: string;
// };
export default function Search() {
	const navigate = useNavigate();
	// const debounce = useDebounce(500);
	const [search, setSearch] = useState<string>("");

	const handleSearch = () => {
		console.log(search);
		navigate(ROUTES.products);
	};

	return (
		<div className="flex gap-2 items-center w-full md:w-[40%]">
			<input
				value={search}
				onChange={(e) => setSearch(e)}
				id="search"
				type="text"
				placeholder="Search..."
				className="shadow appearance-none border border-secondry rounded-lg w-full p-2 text-gray-700 leading-tight focus:outline-none focus:ring-secondry focus:ring-1"
			/>

			<img
				onClick={() => handleSearch}
				src="/svgs/search.svg"
				alt="search"
				className="w-8"
			/>
		</div>
	);
}
