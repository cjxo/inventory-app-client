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
  refetch: async () => {},
  findByName: (name) => {},
});

// https://en.wikipedia.org/wiki/Relative_luminance
const getLuminanceFromHexRGB = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const luminance = 0.2126 * r*r + 0.7152 * g*g + 0.0722 * b*b;
  
  return luminance;
};

const CategoryProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    refetch();
  }, []);
  
  const refetch = async () => {
    setIsLoading(true);
    const result = await api.category.getAll();
    setCategories(result.categories.map(category => {
      return {
        ...category,
        textColour: getLuminanceFromHexRGB(category.background_colour) > 0.5 ? "#000000" : "#FFFFFF",
      };
    }));
    setIsLoading(false);
  };
  
  const findByName = (name) => categories.find(category => category.name === name);
  
  const addCategory = async (name, background_colour) => {
    const result = await api.category.insert(name, background_colour);
    if (result.ok) {
      const newCategory = {
        ...result.category,
        textColour: getLuminanceFromHexRGB(result.category.background_colour) > 0.5 ? "#000000" : "#FFFFFF",
      };
      setCategories(prev => [...prev, newCategory]);
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
    <CategoryContext.Provider value={{isLoading,categories,addCategory,removeCategoryGivenID,refetch,findByName}}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);
export default useCategory;
export { CategoryProvider, CategoryContext };