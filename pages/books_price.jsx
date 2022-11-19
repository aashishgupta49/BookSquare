import React, { useState, useEffect} from "react";
import Product from "../components/Product";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
const books_price = () => {
  const [products, setProducts] = useState([]);
  const { publicKey, sendTransaction } = useWallet();
  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);
  return (
    <div >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default books_price