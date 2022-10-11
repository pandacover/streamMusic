import React, { createContext } from "react";

export interface SearchContextType {
	searchParams: String;
	setSearchParams: React.Dispatch<React.SetStateAction<String>>;
}

const SearchContext = createContext<SearchContextType>({
	searchParams: new String(),
	setSearchParams: () => null,
});

export default SearchContext;
