import Product from "./Product";
function PdtTab() {
  return (
    <>
      <Product
        title="Product 1"
        price={19.99}
        description="This is product 1"
      />
      <Product
        title="Product 2"
        price={29.99}
        description="This is product 2"
      />
      <Product
        title="Product 3"
        price={39.99}
        description="This is product 3"
      />
      <Product
        title="Product 4"
        price={49.99}
        description="This is product 4"
      />
    </>
  );
}
export default PdtTab;
