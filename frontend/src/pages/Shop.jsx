import ProductCard from "../components/ProductCard";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Women Dress",
      price: 49.99,
      image: "/assets/dress.jpg"
    }
  ];

  return (
    <div>
      <h1>Shop</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Shop;
