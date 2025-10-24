import ProductCard from "./ProductCard";

export default function ProductCardsContainer({
  data,
  productQuantity,
  handleOnChangePrice,
  handleAddToQuantity,
  handleRemoveQuantity,
}) {


  // Defensive guard — prevents crash if props is not ready
  if (!Array.isArray(productQuantity)) {
    console.error("productQuantity is not an array:", productQuantity);
    return <p>Loading...</p>;
  }



  return (
    <div className="ProductCardsContainer">
      {data.map((product) => {
        const quantityData = productQuantity.find(
          (p) => p.id === product.id
        );

        // Guard each iteration — prevents null crashes
        if (!quantityData) {
          console.warn("No quantity data found for product:", product.id);
          return null;
        }

        return (
          <ProductCard
            key={product.id}
            product={product.name || product.product || "Unnamed"}
            img={product.img}
            productQuantity={quantityData}
            handleOnChangePrice={handleOnChangePrice}
            handleAddToQuantity={handleAddToQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />
        );
      })}
    </div>
  );
}