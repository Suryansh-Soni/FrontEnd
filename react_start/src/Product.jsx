function Product(props) {
  const style = {
    backgroundColor: props.price > 20 ? "lightcoral" : "lightgreen",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
  };

  return (
    <div style={style}>
      <p>product</p>
    </div>
  );
}

export default Product;
