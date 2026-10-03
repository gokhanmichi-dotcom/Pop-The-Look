import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <div>
      <h2>Shop</h2>

      <ProductCard
        name="Women Dress"
        price="49.99"
        image="/images/dress.jpg"
      />
    </div>
  );
}

export default Shop;
