import {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

const CategoryContext = createContext({
  categories: [],
  addCategory: async (name, background_colour) => {},
  removeCategoryGivenID: async (id) => {},
});

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    // api.category.getAll();
    setCategories([
      { id: 1, name: "uncategorized", background_colour: "#ffffff", },
      { id: 2, name: "potion", background_colour: "#777ae6", },
      { id: 3, name: "food", background_colour: "#e2b86c", },
      { id: 4, name: "gems", background_colour: "#77e6a1", }
    ]);
  }, []);
  
  const addCategory = async (name, background_colour) => {
    setCategories(prev => [...prev, { id: prev[prev.length - 1].id + 1, name, background_colour }]);
  };
  
  const removeCategoryGivenID = async (id) => {
    setCategories(prev => prev.filter(category => category.id != id));
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