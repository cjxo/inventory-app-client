import {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

import api from "../lib/api";

const ItemsContext = createContext({
  isLoading: true,
  items: [],
  addItem: async (name, type, price, quantity, buffer) => {},
  removeItemGivenID: async (id) => {},
  refetch: async () => {},
});

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    refetch();
  }, []);
  
  const refetch = async () => {
    setIsLoading(true);
    const result = await api.items.getAll();
    if (result.ok) {
      const blobs = await Promise.all(result.items.map(item => api.items.blob(item.src)));
      
      setItems(result.items.map((item, idx) => {
        //return item;
        return { ...item, src: URL.createObjectURL(blobs[idx].blob) };
      }));
    }
    setIsLoading(false);
  };
  
  const addItem = async (formData) => {
    const result = await api.items.insert(formData);
    if (result.ok) {
      const item = result.item;
      const blob = await api.items.blob(item.src);
      console.log(blob);
      setItems((prev) => [...prev, { ...item, src: URL.createObjectURL(blob.blob) }]);
    } else {
      console.error(result.message);
    }
    
    return result;
  };
  
  const removeItemGivenID = async (id) => {
    const result = await api.items.delete(id);
    if (result.ok) {
      setItems(prev => prev.filter(item => item.id !== id));
    } else {
      console.error(result.message);;
    }
  };
  
  const changeItemCategoryFromCategoryIDToNewCategory = (oldCategoryID, newCategory) => {
    setItems(old => old.map(item => {
      if (item.type === oldCategoryID) {
        return { ...item, type: newCategory.id, type_name: newCategory.name };
      } else {
        return item;
      }
    }));
  };
  
  return (
    <ItemsContext.Provider value={ {isLoading,items,addItem,removeItemGivenID,refetch,changeItemCategoryFromCategoryIDToNewCategory} }>
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = () => useContext(ItemsContext);
export default useItems;
export { ItemsProvider, ItemsContext };