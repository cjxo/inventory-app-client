import {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

import api from "../lib/api";

const CategoryContext = createContext({
  isLoading: true,
  categories: [],
  addCategory: async (name, background_colour) => {},
  removeCategoryGivenID: async (id) => {},
});

const CategoryProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    api
      .category
      .getAll()
      .then(result => { 
        setCategories(result.categories.map(category => {
          // https://en.wikipedia.org/wiki/Relative_luminance
          const r = parseInt(category.background_colour.slice(1, 3), 16) / 255;
          const g = parseInt(category.background_colour.slice(3, 5), 16) / 255;
          const b = parseInt(category.background_colour.slice(5, 7), 16) / 255;
          const luminance = 0.2126 * r*r + 0.7152 * g*g + 0.0722 * b*b;
          return {
            ...category,
            textColour: luminance > 0.5 ? "#000000" : "#FFFFFF"
          };
        }));
        setIsLoading(false);
      });
  }, []);
  
  const addCategory = async (name, background_colour) => {
    const result = await api.category.insert(name, background_colour);
    if (result.ok) {
      setCategories(prev => [...prev, result.category]);
    } else {
      console.error(result.message);
    }
    
    return result;
  };
  
  const removeCategoryGivenID = async (id) => {
    const result = await api.category.delete(id);
    if (result.ok) {
      setCategories(prev => prev.filter(category => category.id !== id));
    } else {
      console.error(result.message);
    }
  };
  
  return (
    <CategoryContext.Provider value={{isLoading,categories,addCategory,removeCategoryGivenID}}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);
export default useCategory;
export { CategoryProvider, CategoryContext };