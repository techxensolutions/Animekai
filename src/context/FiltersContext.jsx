import { createContext, useState } from "react";

const FiltersContext = createContext(null);

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    genre: [],
    type: "All",
    status: "All",
    search: "",
    page: 1,
    limit: 20,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContext;
