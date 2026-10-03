function ProductCard({ name, price, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>£{price}</p>
    </div>
  );
}

export default ProductCard;
