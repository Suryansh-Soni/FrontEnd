function Product(props) {
  const style = {
    backgroundColor: props.price > 20 ? "lightcoral" : "lightgreen",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
  };

  return (
    <div style={style}>
      <h2>{props.title}</h2>
      <p>${props.price.toFixed(2)}</p>
      <p>{props.description}</p>
      {props.price > 20 && <p>This product is expensive</p>}
    </div>
  );
}

export default Product;
