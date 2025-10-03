import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from "react";
import axios from "../utils/axiosInstance";

interface CartContextType {
  numberOfItems: number;
  fetchCartCount: () => Promise<void>;
}

const CartContext = createContext<CartContextType>({
  numberOfItems: 0,
  fetchCartCount: async () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [numberOfItems, setTotalItems] = useState(0);
  const hasFetched = useRef(false); // ✅ prevents double call in React 18 dev

  const fetchCartCount = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setTotalItems(0);
        return;
      }

      const res = await axios.get("/users/cart"); 
      setTotalItems(res.data.numberOfItems);
    } catch (err) {
      console.error("Error fetching cart count:", err);
      setTotalItems(0);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return; // skip second call
    hasFetched.current = true;
    fetchCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ numberOfItems, fetchCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
