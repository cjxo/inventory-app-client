import {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

import api from "../lib/api";

const CategoryContext = createContext({
  categories: [],
  addCategory: async (name, background_colour) => {},
  removeCategoryGivenID: async (id) => {},
});

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    api
      .category
      .getAll()
      .then(result => { 
        setCategories(result.categories);
      });
  }, []);
  
  const addCategory = async (name, background_colour) => {
    setCategories(prev => [...prev, { id: prev[prev.length - 1].id + 1, name, background_colour }]);
  };
  
  const removeCategoryGivenID = async (id) => {
    setCategories(prev => prev.filter(category => category.id !== id));
  };
  
  return (
    <CategoryContext.Provider value={ {categories,addCategory,removeCategoryGivenID} }>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);
export default useCategory;
export { CategoryProvider, CategoryContext };