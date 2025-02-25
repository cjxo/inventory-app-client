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
    setItems(result.items);
    setIsLoading(false);
  };
  
  const addItem = async (name, type, price, quantity, buffer) => {
    setItems((prev) => [...prev, { id: prev[prev.length - 1].id + 1, name, type, price, quantity, src: buffer }]);
  };
  
  const removeItemGivenID = async (id) => {
    const result = await api.items.delete(id);
    if (result.ok) {
      setItems(prev => prev.filter(item => item.id !== id));
    } else {
      console.error(result.message);;
    }
  };
  
  return (
    <ItemsContext.Provider value={ {isLoading,items,addItem,removeItemGivenID,refetch} }>
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = () => useContext(ItemsContext);
export default useItems;
export { ItemsProvider, ItemsContext };