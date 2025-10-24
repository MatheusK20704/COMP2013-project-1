import { useState } from "react";
import ProductCardsContainer from "./ProductCardsContainer";
import NavBar from "./NavBar";


// Main application component responsible for managing product data and interactions
export default function ProductApp({ data }) {

// Initialize state for each product (tracks quantity, price options, and selected price
  const [productQuantity, setProductQuantity] = useState(
    data.map((prod) => ({
      id: prod.id,
      quantity: prod.quantity,
      priceOptions: prod.priceOptions,
      currentPrice: prod.priceOptions[0],
    }))
  );

// Updates the selected price option for a given product
  const handleOnChangePrice = (productId, e) => {
    const newProductQuantity = productQuantity.map((prod) =>
      prod.id === productId
        ? { ...prod, currentPrice: parseFloat(e.target.value) }
        : prod
    );
    setProductQuantity(newProductQuantity);
  };

   // Increments the quantity of a specific product
  const handleAddToQuantity = (productId) => {
  const newProductQuantity = productQuantity.map((prod) =>
    prod.id === productId
      ? { ...prod, quantity: prod.quantity + 1 }
      : prod
  );
  setProductQuantity(newProductQuantity);
};

  // Decrements the quantity of a specific product, but never below 0
 const handleRemoveQuantity = (productId) => {
  const newProductQuantity = productQuantity.map((prod) =>
    prod.id === productId
      ? { ...prod, quantity: Math.max(0, prod.quantity - 1) }
      : prod
  );
    setProductQuantity(newProductQuantity);
    };


    // Render layout: NavBar on top, ProductCardsContainer displaying all products
  return (
    
    <div>
        <div className="navBar"> <NavBar/> </div>
    
      <div className="ProductCardsContainer"> <ProductCardsContainer
        data={data}
        productQuantity={productQuantity}
        handleOnChangePrice={handleOnChangePrice}
        handleAddToQuantity={handleAddToQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
      />
      </div>
    </div>
  );
}