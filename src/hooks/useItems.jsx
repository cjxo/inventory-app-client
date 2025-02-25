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
});

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    api
      .items
      .getAll()
      .then(result => {
        setItems(result.items);
        setIsLoading(false);
      });
  }, []);
  
  const addItem = async (name, type, price, quantity, buffer) => {
    setItems((prev) => [...prev, { id: prev[prev.length - 1].id + 1, name, type, price, quantity, src: buffer }]);
  };
  
  const removeItemGivenID = async (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  
  return (
    <ItemsContext.Provider value={ {isLoading,items,addItem,removeItemGivenID} }>
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = () => useContext(ItemsContext);
export default useItems;
export { ItemsProvider, ItemsContext };